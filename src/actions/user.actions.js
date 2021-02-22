import {
  closeConnectMetamaskModal,
  closeSignupModal,
  openNotInstalledMetamask,
  openSignupModal,
} from '@actions/modals.actions';
import { STORAGE_IS_LOGGED_IN } from '@constants/storage.constants';
import userReducer from '@reducers/user.reducer';
import {
  handleSignMessage,
  isMetamaskInstalled,
} from '@services/metamask.service';
import BaseActions from './base-actions';
import api from '@services/api/espa/api.service';

class UserActions extends BaseActions {
  tryToLogin() {
    return async (dispatch) => {
      if (!isMetamaskInstalled()) {
        dispatch(openNotInstalledMetamask());
        return;
      }

      const { ethereum } = window;

      try {
        const [account] = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        if (!account) {
          console.error('Account is epmty.');
          return;
        }

        localStorage.setItem(STORAGE_IS_LOGGED_IN, 1);
        dispatch(this.setValue('account', account));
        dispatch(closeConnectMetamaskModal());
        dispatch(openSignupModal());
      } catch (e) {
        console.error(e.message);
      }
    };
  }

  tryToSignup(account, userName, email, signMsg) {
    return async (dispatch) => {
      if (!signMsg) {
        signMsg = await api.handleSignUp(account, userName, email);
      }

      const { signature } = await handleSignMessage({
        publicAddress: account,
        signMsg,
      });

      dispatch(this.tryAuthentication(account, signature));
    };
  }

  tryAuthentication(account, signature) {
    return async (dispatch) => {
      try {
        const data = await api.handleAuthentication(account, signature);

        if (data) {
          const { user, authToken } = data;
          localStorage.setItem(STORAGE_IS_LOGGED_IN, 1);
          dispatch(this.setValue('user', user));
          dispatch(this.setValue('authToken', authToken));
        } else {
          dispatch(this.logout());
        }
      } catch (e) {
        console.error(e.message);
        dispatch(this.logout());
      }

      dispatch(closeSignupModal());
    };
  }

  logout() {
    return async (dispatch) => {
      localStorage.removeItem(STORAGE_IS_LOGGED_IN);
      dispatch(this.setValue('user', null));
      dispatch(this.setValue('authToken', null));
    };
  }
}

export default new UserActions(userReducer);
