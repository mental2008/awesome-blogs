---
layout:     post
title:      "矩阵乘法递推的优化"
subtitle:   "叉姐太强辣orz"
date:       2019-04-11 02:05:00
author:     "mental2008"
header-img: "img/post-bg-u6.jpg"
catalog: true
tags:
    - ACM
    - 数论
---

补去年校赛题目的时候，发现了一道线性递推的题目，不过递推式的大小竟然开到了1000😰一般这类题目都是用矩阵快速幂来处理的，但如果在这里用的话肯定妥妥地超时啊orz

于是学习了一波叉姐的论文，关于如何优化矩阵乘法递推...论文地址: [http://www.docin.com/p-724323397.html](http://www.docin.com/p-724323397.html)

P.S. 同时意外感受了一波BM递推的强大！只需要把序列传进去，就能返回一个合法的线性递推式了QvQ

---

原题目是给定一个长度为 $k$ 的数组 $a_i$$(2 \le k \le 1000)$

定义函数

$$
f(i)=\begin{cases}
1 &0 \le i < k \\
\sum_{j=1}^{k}a_j*f(i-j)+\tbinom{i}{k} & i \ge k 
\end{cases}$$

求 $f(n)(0 \le n \le 10^9)$ 的值.

这里想手推一个线性齐次递推式不太容易orz，因为 $\tbinom{i}{k}$ 不太方便处理

于是直接多枚举几项，将整个序列丢进杜教的BM板子就可以得到最终的线性递推式啦！

通过尝试，能够发现递推式的长度大概是 $2k$. 直接矩阵快速幂转移的话，时间复杂度是 $O(k^3logn)$，肯定TLE了.

通过叉姐论文里的方法，我们可以将矩阵乘法优化成多项式乘法，这样总体的时间复杂度就是 $O(k^2logn)$，再丧心病狂一点可以用FFT或者NTT的方法优化多项式乘法，复杂度就成了 $O(klogklogn)$（这拿头写啊😟

具体的代码明天再更，也说不定就咕咕咕了呢2333

update: 抄了个 `zzq` 的BM板子，里面竟然还自带了叉姐论文里的优化orz，稍微注意下取模的问题，然后就能随便过了啊2333

附上代码

Time: **5569ms**

```c++
#include <bits/stdc++.h>

using namespace std;

#define mem(a,i) memset(a,i,sizeof(a))
#define pb push_back
typedef long long ll;
const int mod=1e9+7;
const int maxn=10005;

ll qp(ll a,ll b) {
    ll x=1; a%=mod;
    while(b) {
        if(b&1) x=x*a%mod;
        a=a*a%mod; b>>=1;
    }
    return x;
}
namespace linear_seq {
    inline vector<int> BM(vector<int> x) {
        vector<int> ls,cur;
        int pn=0,lf,ld;
        for(int i=0;i<int(x.size());++i) {
            ll t=-x[i]%mod;
            for(int j=0;j<int(cur.size());++j) {
                t=(t+x[i-j-1]*(ll)cur[j])%mod;
            }
            if(!t) continue;
            if(!cur.size()) {
                cur.resize(i+1); lf=i; ld=t; continue;
            }
            ll k=-t*qp(ld,mod-2)%mod;
            vector<int> c(i-lf-1); c.pb(-k);
            for(int j=0;j<int(ls.size());++j) c.pb(ls[j]*k%mod);
            if(c.size()<cur.size()) c.resize(cur.size());
            for(int j=0;j<int(cur.size());++j)
                c[j]=(c[j]+cur[j])%mod;
            if(i-lf+(int)ls.size()>=(int)cur.size())
                ls=cur, lf=i, ld=t;
            cur=c;
        }
        vector<int>&o=cur;
        for(int i=0;i<int(o.size());++i)
            o[i]=(o[i]%mod+mod)%mod;
        return o;
    }
    const int SZ=20005;
    int N; ll a[SZ],h[SZ],t_[SZ],s[SZ],t[SZ];
    inline void mull(ll *p,ll *q) {
        for(int i=0;i<N+N;++i) t_[i]=0;
        for(int i=0;i<N;++i) if(p[i])
            for(int j=0;j<N;++j)
                t_[i+j]=(t_[i+j]+p[i]*q[j])%mod;
        for(int i=N+N-1;i>=N;--i) if(t_[i])
            for(int j=N-1;~j;--j)
                t_[i-j-1]=(t_[i-j-1]+t_[i]*h[j])%mod;
        for(int i=0;i<N;++i) p[i]=t_[i];
    }
    inline ll calc(ll K) {
        for(int i=N;~i;--i) s[i]=t[i]=0;
        s[0]=1; if(N!=1) t[1]=1; else t[0]=h[0];
        for(; K; mull(t,t), K>>=1) if(K&1) mull(s,t); ll su=0;
        for(int i=0;i<N;++i) su=(su+s[i]*a[i])%mod;
        return (su%mod+mod)%mod;
    }
    inline int gao(vector<int> x,ll n) {
        if(n<int(x.size())) return x[n];
        vector<int> v=BM(x); N=v.size(); if(!N) return 0;
        for(int i=0;i<N;++i) h[i]=v[i], a[i]=x[i];
        return calc(n);
    }
}

ll a[maxn];
ll fact[maxn],fiv[maxn],inv[maxn];
void init() {
    fact[0]=fact[1]=fiv[0]=fiv[1]=inv[1]=1;
    for(int i=2;i<maxn;++i) {
        fact[i]=fact[i-1]*i%mod;
        inv[i]=inv[mod%i]*(mod-mod/i)%mod;
        fiv[i]=inv[i]*fiv[i-1]%mod;
    }
}
ll C(ll m,ll k) {
    if(m<k||k<0) return 0;
    return (fact[m]*fiv[k]%mod)*fiv[m-k]%mod;
}

int main() {
    init();
    int n,k;
    while(~scanf("%d%d",&n,&k)) {
        for(int i=1;i<=k;++i) scanf("%lld",&a[i]);
        vector<int> v;
        for(int i=0;i<k;++i) v.pb(1);
        for(int i=k;i<=10*k;++i) {
            ll res=C(i,k);
            for(int j=1;j<=k;++j) {
                ll p=1ll*a[j]*v[i-j];
                p=(p%mod+mod)%mod;
                res=(res+p)%mod;
            }
            v.pb(res);
        }
        printf("%d\n",linear_seq::gao(v,n));
    }
    return 0;
}
```
