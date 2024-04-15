export interface IRewardHistory {
    claims: [
        {
            date: string;
            amount: string;
            rewardMethod: string;
        },
    ]
}

export interface IClaimReffRewards {
    success: boolean;
    message: string;
}