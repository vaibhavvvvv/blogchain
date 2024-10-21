"use client"

import { createWalletClient, custom, createPublicClient, http, getContract } from 'viem'
import { polygonAmoy } from 'viem/chains'
import { BlogPost } from '../types/types'
import { abi } from '../abi/abi'

export const publicClient = createPublicClient({
    chain: polygonAmoy,
    transport: http()
})

export function WalletClientCreate(eth: any) {
    const walletClient = createWalletClient({
        chain: polygonAmoy,
        transport: custom(eth)
    })
    // console.log("wall", walletClient)
    return walletClient
}

export async function CreateNewBlog(ethProvider: any, title: string, content: string) {
    const walletClient = WalletClientCreate(ethProvider);
    const [account] = await walletClient.getAddresses();
    
    if (!account) {
        throw new Error("No account found. Please ensure you're connected to a wallet.");
    }

    const contract = getContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        client: { public: publicClient, wallet: walletClient },
    });

    try {
        const estimatedGas = await contract.estimateGas.createPost([title, content], {
            account,
        });

        const result = await contract.write.createPost([title, content], {
            account,
            gas: BigInt(estimatedGas) * BigInt(2), // Double the estimated gas as a safety margin
        });

        return result;
    } catch (error) {
        console.error("Transaction failed:", error);
        throw error;
    }
}


export async function GetAllBlogs(ethProvider: any) {
    const walletClient = WalletClientCreate(ethProvider)
    const accounts = await walletClient.getAddresses();
    // const acc = accounts[0];
    const contract = getContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        client: { public: publicClient },
    });
    const result = await contract.read.viewAllPosts();
    return result
}

export async function GetBlog(ethProvider: any, id: bigint) {
    const walletClient = WalletClientCreate(ethProvider)
    const accounts = await walletClient.getAddresses();
    // const acc = accounts[0];
    const contract = getContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        client: { public: publicClient },
    });
    const result: readonly [bigint, `0x${string}`, string, string, boolean] = await contract.read.viewPost([id]);
    const [postId, author, title, content, isDeleted] = result;

    const blogPost: BlogPost = {
        id: postId,
        author: author,
        title: title,
        content: content,
        isDeleted: isDeleted,
    };
    return blogPost;
}

export async function DeleteBlog(ethProvider: any, id: bigint) {
    const walletClient = WalletClientCreate(ethProvider);
    const accounts = await walletClient.getAddresses();
    const acc = accounts[0];
    const contract = getContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        client: { public: publicClient, wallet: walletClient },
    });
    const result = contract.write.deletePost([id], {
        account: acc,
    });
    return result
}

