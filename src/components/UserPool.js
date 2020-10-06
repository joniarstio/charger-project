import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_ZPdnevPkt',
  ClientId: '57qodd5q9stcspi9v5lla0vs2'
};

export default new CognitoUserPool(poolData);