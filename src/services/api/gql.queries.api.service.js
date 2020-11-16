import { gql } from 'graphql-request';
import { HISTORY_BID_PLACED_EVENT, HISTORY_BID_WITHDRAWN_EVENT } from '@constants/history.constants';

export const getLiveAuctions = gql`
  {
    digitalaxGarmentAuctions(where:{resulted_not_in:[true]}) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;

export const getAuctionsByIds = gql`
  query getAuctionsByIds($ids: [ID!]) {
    digitalaxGarmentAuctions(where: {id_in: $ids}) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;

export const getGarmentsByIds = gql`
  query getGarmentsByIds($ids: [ID!]) {
    digitalaxGarments(where: {id_in: $ids}) {
      id
      designer
      owner
      primarySalePrice
      tokenUri
      strands {
        amount
        tokenUri
        id
      }
    }
  }
`;

export const getDesignersByIds = gql`
  query getDesignersByIds($ids: [ID!]) {
    digitalaxGarmentDesigners(where: {id_in: $ids}) {
      id
      garments {
        id
        tokenUri
      }
      listings {
        reservePrice
        startTime
        endTime
        resulted
        topBidder {
          id
        }
        topBid
        lastBidTime
      }
    }
  }
`;

export const getGarmentsByDesignerId = gql`
  query getGarmentsByDesignerId($ids: [Bytes!]) {
    digitalaxGarments(where: {designer_in: $ids}) {
      id
      designer
      owner
      primarySalePrice
      tokenUri
      strands {
        amount
        tokenUri
        id
      }
    }
  }
`;

export const getAuctionsHistoryByIds = gql`
  query getAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentAuctionHistories(where: {token_in: $ids}) {
      id
      eventName
      timestamp
      transactionHash
      bidder {
        id
      }
      value
      token {
        id
        owner
        primarySalePrice
        tokenUri
        strands {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const getAuctionsHistoryByTimestampGt = gql`
  query getAuctionsHistoryByTimestampGt($timestamp: BigInt!) {
    digitalaxGarmentAuctionHistories(where: {
      eventName_in: ["${HISTORY_BID_PLACED_EVENT}",
       "${HISTORY_BID_WITHDRAWN_EVENT}"], 
       timestamp_gt: $timestamp}) {
      id
      eventName
      timestamp
      value
    }
  }
`;

export const getAuctionContracts = gql`
  {
    digitalaxAuctionContracts {
      id
      minBidIncrement
      bidWithdrawalLockTime
      platformFee
      platformFeeRecipient
      totalSales
    }
  }
`;

export const getResultedAuctionsByEndTimeGt = gql`
  query getAuctionsHistoryByTimestampGt($endTime: BigInt!) {
    digitalaxGarmentAuctions(where: { resulted_not_in:[true], endTime_gt: $endTime }) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;
