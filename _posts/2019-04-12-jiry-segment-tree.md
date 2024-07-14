---
layout:     post
title:      "HDU 5306"
subtitle:   "吉如一线段树"
author:     "mental2008"
header-style: text
mathjax: true
catalog: true
tags:
    - ACM
    - 数据结构
    - 线段树
---

## Description

题目链接: [http://acm.hdu.edu.cn/showproblem.php?pid=5306](http://acm.hdu.edu.cn/showproblem.php?pid=5306)

题目给定一个长度为 $n$ 的数组 $a_i$，并进行 $m$ 次操作:

操作 $0$ $l$ $r$ $t$ : 将 $[l, r]$ 区间上比 $t$ 大的数用 $t$ 进行替换;

操作 $1$ $l$ $r$ : 查询 $[l, r]$ 区间上的最大值;

操作 $2$ $l$ $r$ : 查询 $[l, r]$ 区间的和.

其中 $\sum n \le 1000000, \sum m \le 1000000$.

## Solution

操作 $1$ 和 $2$ 都是比较常见的线段树操作，而区间取 $min$ 则是一个不太容易处理的操作.

参考吉如一的论文，我们可以在每个线段树的节点上记录区间内的**最大值**、**次大值**、**区间和**以及**最大值的个数**.

每次进行区间取 $min$ 操作的时候，如果当前区间的最大值已经小于等于 $t$，说明是无效操作，可以直接返回; 如果 $sc <  t < mx$ ($sc$ 表示区间次大值，$mx$ 表示区间最大值)，因为受影响的元素只有最大值，我们可以直接更新; 在其余情况，继续往下递归即可.

根据论文证明，这样操作均摊下来的复杂度是 $mlogn$，于是就可以通过了

P.S. 具体的复杂度证明没有太懂，需要用到势能分析一类的知识，大致的思想就是在取最值操作的时候，不同数字种数减少，而递归操作的次数与数字种数有关...正常情况下复杂度最坏也有 $nlog{n^2}$，于是就可以放心使用了 2333

## AC code

Time: **2293ms**

Memory: **19420kB**

```c++
#include <bits/stdc++.h>

using namespace std;

#define rep(i,a,b) for(int i=a;i<=b;++i)
typedef long long ll;
const int maxn=1e6+5;
int n,m;
ll a[maxn];
ll mx[maxn];
ll num[maxn];
ll sc[maxn];
ll sum[maxn];
void pushUp(int root) {
	mx[root]=max(mx[root<<1],mx[root<<1|1]);
	num[root]=0;
	sc[root]=max(sc[root<<1],sc[root<<1|1]);
	sum[root]=sum[root<<1]+sum[root<<1|1];
	if(mx[root]==mx[root<<1]) num[root]+=num[root<<1];
	else sc[root]=max(sc[root],mx[root<<1]);
	if(mx[root]==mx[root<<1|1]) num[root]+=num[root<<1|1];
	else sc[root]=max(sc[root],mx[root<<1|1]);
}
void build(int root,int l,int r) {
	if(l==r) {
		mx[root]=a[l];
		num[root]=1;
		sc[root]=-1;
		sum[root]=a[l];
		return;
	}
	int mid=(l+r)>>1;
	build(root<<1,l,mid);
	build(root<<1|1,mid+1,r);
	pushUp(root);
}
void pushDown(int root) {
	if(mx[root]<mx[root<<1]) {
		sum[root<<1]+=num[root<<1]*(mx[root]-mx[root<<1]);
		mx[root<<1]=mx[root];
	}
	if(mx[root]<mx[root<<1|1]) {
		sum[root<<1|1]+=num[root<<1|1]*(mx[root]-mx[root<<1|1]);
		mx[root<<1|1]=mx[root];
	}
}
void upd(int root,int l,int r,int ql,int qr,ll t) {
	if(l>qr||r<ql) return;
	if(t>=mx[root]) return;
	if(l==r) {
		mx[root]=t;
		sum[root]=t;
		return;
	}
	if(l>=ql&&r<=qr) {
		if(t>sc[root]) {
			sum[root]+=num[root]*(t-mx[root]);
			mx[root]=t;
			return;
		}
	}
	int mid=(l+r)>>1;
	pushDown(root);
	upd(root<<1,l,mid,ql,qr,t);
	upd(root<<1|1,mid+1,r,ql,qr,t);
	pushUp(root);
}
ll getMax(int root,int l,int r,int ql,int qr) {
	if(l>qr||r<ql) return 0ll;
	if(l>=ql&&r<=qr) return mx[root];
	int mid=(l+r)>>1;
	pushDown(root);
	ll res=0;
	res=max(res,getMax(root<<1,l,mid,ql,qr));
	res=max(res,getMax(root<<1|1,mid+1,r,ql,qr));
	pushUp(root);
	return res;
}
ll getSum(int root,int l,int r,int ql,int qr) {
	if(l>qr||r<ql) return 0ll;
	if(l>=ql&&r<=qr) return sum[root];
	int mid=(l+r)>>1;
	pushDown(root);
	ll res=getSum(root<<1,l,mid,ql,qr)+getSum(root<<1|1,mid+1,r,ql,qr);
	pushUp(root);
	return res;
}

int main() {
	int caseCnt;
	scanf("%d",&caseCnt);
	while(caseCnt--) {
		scanf("%d%d",&n,&m);
		rep(i,1,n) scanf("%lld",&a[i]);
		build(1,1,n);
		while(m--) {
			int o,l,r;
			scanf("%d%d%d",&o,&l,&r);
			if(o==0) {
				ll t;
				scanf("%lld",&t);
				upd(1,1,n,l,r,t);
			}
			else if(o==1) {
				printf("%lld\n",getMax(1,1,n,l,r));
			}
			else {
				printf("%lld\n",getSum(1,1,n,l,r));
			}
		}
	}
	return 0;
}
```
