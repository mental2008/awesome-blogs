---
layout:     post
title:      "SCUT OJ P25"
subtitle:   "组合数学 思维题"
date:       2018-09-29 01:30:00
author:     "mental2008"
header-img: "img/post-bg-cc.jpg"
catalog: true
tags:
    - ACM
    - 组合数学
    - 思维题
---

## SCUT OJ P25

题目链接：[https://scut.online/p/25](https://scut.online/p/25)

### 题意

给出一个有向图，每种方案从 $$n$$ 个点中挑选 $$k$$ 个点，记该方案的价值为从 $$k$$ 个点最多能延伸的点数（如a->b，b->c，则a可延伸到的点数为3）。问所有可能的方案的价值和是多少？

### 解题报告

这个是前年集训队选拔时的题目了，感觉在思维上还是很有新意的QvQ

可以考虑每一个点对于答案的贡献，即计算每一个点在所有方案中的出现次数，对于任一点的$$i$$ ，它的出现次数为$$C_n^k-C_{n-sum}^k（sum代表能够延伸到达i的点数）$$ ，即为**总方案数**减去**选了 $$k$$ 个点但一定不包含点 $$i$$ 的方案数( $$sum$$ 中的点选择了就一定会包含 $$i$$ )**。

对于 $$sum$$ 的值，我们可以在建图的时候反向连边，从任一点的 $$i$$ 出发，跑一遍 $$dfs$$ 就可以知道有多少个点能够延伸到达 $$i$$ 了。

### AC代码

```c++
#include<bits/stdc++.h>

using namespace std;

#define mem(a,i) memset(a,i,sizeof(a))
#define rep(i,a,b) for(int i=a;i<=b;++i)
#define per(i,a,b) for(int i=a;i>=b;--i)
#define pb push_back
typedef long long ll;
const int maxn=55;
vector<int> G[maxn];
int n,m,k;
bool vis[maxn];
ll C[maxn][maxn];
void init(){
    mem(C,0);
	C[0][0]=1;
	rep(i,1,50) {
        C[i][0]=C[i][i]=1;
        rep(j,1,i-1) {
            C[i][j]=C[i-1][j]+C[i-1][j-1];
        }
	}
}
void dfs(int u){
	vis[u]=1;
	int len=(int)G[u].size();
	rep(i,0,len-1) {
		int v=G[u][i];
		if(vis[v]) continue;
		dfs(v);
	}
}
int main(){
	init();
	while(~scanf("%d%d%d",&n,&m,&k)){
        rep(i,1,n) G[i].clear();
		rep(i,1,m) {
			int u,v;
			scanf("%d%d",&u,&v);
			G[v].pb(u);
		}
		ll ans=0;
		rep(i,1,n) {
		    mem(vis,0);
			dfs(i);
			int sum=0;
			rep(j,1,n) if(vis[j]) sum++;
			ans+=C[n][k]-C[n-sum][k];
		}
		printf("%lld\n",ans);
	}
	return 0;
}

```

