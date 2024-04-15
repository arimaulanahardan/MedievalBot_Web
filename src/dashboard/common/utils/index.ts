export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
};

export const formatWalletAddress = (address: string) => {
    if (!address) return "";
    const trimmedAddress = address.substring(0, 6) + "..." + address.substring(address.length - 4);
    return trimmedAddress;
};