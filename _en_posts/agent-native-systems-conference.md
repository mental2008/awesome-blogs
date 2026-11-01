---
layout: post
title: "Agent-Native Conference for Systems Research"
subtitle: "From research questions to peer review: let agents support valuable systems research"
date: 2026-11-01 00:00:00 +0800
author: "mental2008"
header-style: text
translation_key: agent-native-systems-conference
description: "This blog examines what systems conferences and peer review are for, how Auto Research can help research communities grow, and how conferences can organize research, validation, review, and discussion around shared research questions."
tags:
    - Agent
    - Systems Research
---

When agents can help researchers quickly implement an idea, run experiments, and revise an approach based on the results, research communities have an opportunity to accumulate knowledge faster. An academic conference focused on a class of systems problems can use this capability to attract new participants, turn ideas that might otherwise remain untested into working prototypes, and assess different approaches using the same evaluation criteria.

Agents let researchers try more ideas and test them faster, helping a field advance more quickly. The value of research depends on the questions it asks, how its conclusions are validated, and the insights it produces. Yet agents also make papers easier to produce. As paper production accelerates, reviewers' time and attention are unlikely to increase at the same rate. If graduation, hiring, and promotion continue to depend heavily on publications at top conferences, greater research capacity may bring both more valuable discoveries and heavier reviewing workloads.

Academic conferences need to respond to both changes. In this blog, I explore what a conference for computer systems research might look like when researchers and agents work together. I call it an "agent-native conference for systems research."

## Why systems conferences exist

Behind a systems conference is a community of researchers and practitioners gathered around shared questions. Some care about abstractions and implementations in operating systems; others about resource allocation and failures in networks, or how to operate large-scale services reliably. Their approaches may compete and their judgments may differ, but they are willing to spend time understanding one another's work because it addresses problems they care about.

Conferences give community members a chance to meet regularly and share updates on their research. Researchers share new system designs, measurement findings, and lessons from deployment. Peers examine the evidence, discuss design trade-offs, identify unresolved problems, and take those problems back to their own research. OSDI's stated mission[^osdi-2027] explicitly emphasizes exchanges between academia and industry on the design, implementation, and implications of systems software.

Over time, these activities build a body of shared knowledge: why an abstraction works, what a performance gain costs, under what conditions a conclusion fails, and which problems deserve the next generation of researchers' attention. By selecting papers and shaping the program, conferences influence which work the community pays attention to and which questions it discusses. These discussions also help younger researchers learn to formulate questions, evaluate evidence, and respond to criticism.

Conference acceptance decisions matter for graduation, hiring, and promotion because **a conference's reputation, built over time, makes acceptance a form of peer recognition**. To sustain that recognition, conferences need to keep sharing valuable research, encouraging substantive discussions, and helping researchers form new collaborations.

In my view, as a conference expands, it needs to be clearer about the problems it cares about: what constraints the target systems face, what gaps existing methods leave, and what progress deserves the community's time. Being clear about the research questions helps newcomers join the discussion and gives researchers in different areas a common basis for understanding one another. Conferences should also encourage researchers to explore new questions and revisit earlier judgments in light of new findings.

The CFP (Call for Papers) is the main way a conference introduces its research agenda and scope to prospective authors. It should help them quickly judge which problems the conference cares about, what kinds of systems contributions it expects, and why their work belongs in that discussion. If a CFP merely lists broad fields and reveals implicit preferences only when rejecting papers, authors have little guidance on what to study or where to submit, and the conference will face considerable reviewing work that could have been avoided.

Therefore, **the CFP should state its core questions, scope boundaries, accepted contribution types, and evidence requirements for different tracks**, using examples where necessary to explain ambiguous cases. The CFP should distinguish mandatory submission requirements from research directions the conference particularly encourages. For work across fields or on new questions, authors should explain how their work relates to the systems problems the conference focuses on. The conference should use that connection to assess whether the work fits its scope, rather than relying only on keyword matches. Screening criteria should be published in the CFP so that authors know them before submitting.

## What peer review should judge

Peer review assesses each submission against the conference's research priorities and published criteria. Reviewers should have the relevant expertise and no conflicts of interest. Their reasons for recommending acceptance, revision, or rejection should be based on the paper and evidence submitted in the current round. SOSP's public review criteria[^sosp-2026] include novelty, significance, relevance, clarity, and correctness. These criteria cover both the value of the contribution and the soundness of its technical arguments.

Review has another role that acceptance decisions can obscure: **communicating the community's understanding of good research to authors**. Specific evaluations and discussions help authors understand why peers value a question, what evidence supports a claim, and which design trade-offs need explanation. This feedback can improve the current paper and guide researchers toward more valuable questions in their next project. These expectations should apply whether or not authors use agents.

A community's consensus and values can evolve, too. Reviews should explain the basis of their judgments so that authors can respond and raise objections after receiving a decision, and present different views in later research or submissions. New questions, methods, and evidence can also change the community's existing views. Good reviews convey accumulated experience while leaving room for new perspectives.

For systems research, a useful review should answer at least four questions:

1. What knowledge does this work add? A contribution may be a new mechanism, a design principle, a measurement finding, or valuable deployment experience.
2. How well are the authors' claims supported? Are the baselines, resource constraints, and workloads appropriate? Do the experiments cover key constraints? Are limitations clear?
3. Is this conference a suitable venue for the work? Does the paper fit the intended audience and track requirements, and do the reviewers have the relevant expertise?
4. Which problems must be addressed, and how should the authors improve the work? What are the key grounds for the program committee's (PC's) decision?

### How to assess a paper's quality

To uphold quality standards, conferences need to explain how an individual paper should be judged. I believe conferences can organize review around **questions, evidence, and contributions**: first understand what the authors are trying to solve, then examine whether the evidence supports the conclusions, and finally discuss the work's value to the community.

In *The Three Golden Rules for Successful Scientific Research*,[^dijkstra-golden-rules] Edsger W. Dijkstra offers three suggestions for choosing research problems: (1) raise your quality standards, avoid spending all your time on routine problems, and challenge the limits of your abilities; (2) when social relevance and scientific rigor cannot both be achieved, prioritize reliable research; and (3) if you are confident that peers with abilities and resources at least equal to yours are working on, or are about to work on, the same problem, avoid duplicating that effort and find a direction where you can make a distinctive contribution.

These suggestions also inform how I think conferences should assess research. Is the problem worth attention? Are the conclusions reliable? What new understanding does the work offer relative to existing research? These questions deserve particular care when agents can implement ideas, run experiments, and draft papers much faster.

| Review dimension | Questions reviewers need to answer |
| --- | --- |
| Research question | What problem does the paper address? Why should this community care? What is missing from existing methods? |
| Experiments and evidence | Are the evaluation methods and baselines appropriate? Are the main claims supported, and under what conditions do the results hold? |
| Community contribution | What understanding does the work add beyond prior research? What can other researchers learn from it or build on? |

Reviewers should explain their judgments, point to the supporting passages and evidence, and identify issues that remain unresolved. For exploratory work on future hardware or new abstractions, deployment in an existing production system should not be the only basis for judging value; evaluation methods should also fit the research question. Systems research takes many forms, and evaluation must match the type of contribution.[^systems-evaluation]

For example, suppose a paper proposes a new scheduler and claims to reduce tail latency for an online service. Reviewers should first ask how important the latency problem is for the target workload and why existing scheduling methods are insufficient. They should then check whether the evaluation compares appropriate baselines using comparable resources and tuning effort, covers changes in load, and reports throughput and resource costs. Finally, does the paper explain why latency improves and when the approach fails, or does it only show better numbers under one configuration? Even if the scheduler fails under some conditions, a reliable explanation of its limits and their causes may still leave the community with valuable knowledge.

## Measures systems conferences have already taken

Before discussing an agent-native conference, it helps to examine existing measures related to submission pressure, reviewing capacity, and AI use.

| Measure | Conference practice |
| --- | --- |
| Staged screening | Reviewers at ATC 2026[^atc-2026] first read a separately submitted two-page abstract; those at ASPLOS 2027[^asplos-2027] start with the first two pages of the main text; those at NSDI 2027[^nsdi-2027] start with an introduction of no more than three pages. At MLSys 2027[^mlsys-2027], conference-provided AI tools check formatting, fabricated references, and whether submissions fall within the conference's scope, among other things. |
| Submission limits | OSDI 2026[^osdi-2026] limits each author to eight submissions for that edition; ASPLOS 2027[^asplos-2027] allows four per cycle; EuroSys 2027[^eurosys-2027] allows three per cycle; MLSys 2027[^mlsys-2027] calculates individual quotas based on the number of authors per paper. |
| Resubmission cooling-off periods | Under NSDI 2027's policy[^nsdi-2027], rejected papers that did not receive a one-shot revision opportunity cannot be resubmitted in the next submission round; OSDI 2027[^osdi-2027] requires authors to explain improvements in a resubmission and shows this explanation to reviewers after their reviews are complete but before the final decision. |
| Reserve reviewers | SoCC 2026[^socc-2026] generally requires at least one author per paper who earned a PhD at least five years earlier to register as a reserve reviewer, with exemptions; they are called upon only if submission volume exceeds expectations. MLSys 2027[^mlsys-2027] requires at least one author per paper to register as a reciprocal reviewer, and calls on them to review if submission volume requires it. |
| AI-use rules | OSDI 2026[^osdi-2026] allows AI editing tools but prohibits submissions entirely or substantially generated by AI. SoCC 2026[^socc-2026] allows disclosed generative-AI content and holds authors responsible, and considers it seriously irresponsible for reserve reviewers to have an LLM review papers on their behalf. MLSys 2027[^mlsys-2027] requires authors to disclose AI use and provides conference-run AI assistance for review. |

These rules address different problems in submission and review. Beyond reviewing pressure, agents also bring new opportunities to research communities.

## Auto Research: helping communities grow faster

Consider first what agents can offer research communities. With Auto Research, researchers can implement ideas, set up experiments, find errors, and run additional checks more quickly, shortening the path from a question to an initial answer. For a new community, this creates an opportunity to build a body of results faster and attract other researchers.

Suppose a group of researchers wants to build a community around low-cost inference systems. They could first agree on shared conditions: latency targets, memory budgets, workloads, and deployment environments. Participants could use agents to implement different scheduling approaches, recheck baselines and look for counterexamples under those shared conditions, then bring the results back for discussion. A failed attempt can also be valuable: it might show that an optimization works only for a particular request distribution, or that saving computation comes at an unacceptable tail-latency cost.

As these attempts accumulate, newcomers need not start from scratch every time. They can find runnable baselines, unresolved questions, and records of earlier experiments. Agents help them get started faster, while the conference helps them find peers who care about the same problems.

Such a community needs a clear research direction. Organizers and participants can maintain a shared record of open questions, workloads, experimental conditions, and disputed conclusions, and explain their priorities in the CFP and focused discussions.

The health of a conference's community should be judged by more than submission counts. Do new researchers stay? Have questions raised in the previous edition received better answers? Have existing results been used, rechecked, and revised?

## What faster research means for reviewing pressure

Agents help researchers produce papers faster and reduce the cost of revision and resubmission. If graduation, hiring, or promotion depends on the number of top-conference papers, this added capacity may turn into more submissions.

A more immediate concern is that researchers may copy agent-generated arguments, code, or experimental results into papers without understanding or checking them. An apparently complete experimental analysis may fail to address what matters in the target setting; a graph may show results from an actual experiment yet use an inappropriate baseline. The behavior to guard against is **using outputs without judgment and validation**. Agent use itself should not be treated as a problem. Research completed without agents must pass the same checks.

These incentives create institutional inertia. A Chinese saying about the many people whose livelihoods depended on canal transport captures the difficulty of changing a system so many rely on. Publication records affect graduation, employment, and resource allocation, so evaluation practices are unlikely to change as quickly as research tools. Even if conferences expand reviewing capacity, more submissions may fill that capacity. Whether reviewing capacity can keep up also depends on researchers' need to publish and what they stand to gain from each additional submission.

## Maintaining quality and the community's research taste

### Judge paper quality, not acceptance rates

Submitting and revising papers is becoming easier, while checking their value and evidence still takes peers' time. More attempts may yield new discoveries, but they may also produce papers that lack adequate judgment and validation. Under these conditions, conferences need to maintain rigorous quality standards.

When submission volume rises because research tools improve, conferences may feel pressure to maintain their historical acceptance rates. I believe **the acceptance rate should be an outcome of review, not a target that determines how many papers are accepted**. Standards should not be lowered to accept papers that would otherwise fall short merely to keep the ratio at a particular level.

Maintaining quality means returning to the conference's public criteria: whether the problem deserves the community's attention, whether the contribution is clear, whether the evidence supports the conclusions, and whether key design trade-offs and limitations are explained. Agents can help authors implement systems and run experiments, but polished prose and complete figures cannot substitute for these judgments.

If a conference repeatedly relaxes its standards to maintain an acceptance rate, the peer recognition represented by acceptance will gradually lose meaning. The signal to authors may shift from solving worthwhile problems toward producing enough papers that look complete. Over time, the conference's research taste and the community's trust in its review process may erode.

### Who should judge on behalf of the community?

As submissions increase, some conferences recruit more reviewers from among their authors. SoCC's reserve-reviewer system[^socc-2026] is one example. In machine learning, ICLR[^iclr-2027] and ICML[^icml-2026] also have reciprocal-review arrangements, with different eligibility, workload, and exemption rules.

I do not recommend relying on a reserve-reviewer system to handle submission pressure at systems conferences. Expanding the reviewer pool also changes who evaluates research on the community's behalf and who communicates its standards. Years of reviewing experience, time since earning a PhD, degrees, and job titles alone cannot establish whether someone understands and is willing to uphold a community's research taste.

A conference's research taste is reflected in how it judges the importance of problems, the insight in a design, the strength of experimental evidence, and the conditions under which conclusions hold. Peers who know the field develop and refine these standards through paper selection, discussion, and feedback, testing them through disagreements over individual papers. If conferences keep adding reviewers simply to process more papers, new members may end up making decisions on the conference's behalf before they have had enough opportunity to understand and discuss its standards.

Conferences need to bring in new colleagues with expertise in different areas. SIGCOMM's community discussion[^sigcomm-pc] and SIGPLAN's guidance for PC chairs[^sigplan-pc] both address program committee composition and reviewing capability. Conferences can invite self-nominations and peer nominations, and examine examples of candidates' research or past reviews to understand how they judge the value of a problem, interpret evidence, and offer constructive feedback. They should also make room for younger researchers, industry practitioners, and experts in emerging areas, avoiding exclusive reliance on personal networks.

New members can first complete independent reviews and then discuss their reasoning with experienced peers: why a problem matters, which evidence supports a conclusion, and where disagreements come from. Senior members need to explain their reasons and take newcomers' objections seriously. These exchanges pass on the community's experience while putting established standards to the test. Being like-minded means being willing to discuss shared questions; it need not mean agreeing on every piece of research.

## Bringing agents into research and review

As the way research is done changes, I propose a conference process that covers submission, review, and version management. It would check CFP fit early, keep a copy of each submitted version of the paper, help reviewers locate relevant evidence, and reduce repeated reading so that experts can spend more time on questions that require deeper judgment.

The diagram below summarizes the proposed research and publication process. Blue indicates researchers' and peers' judgments or actions, green indicates agent assistance, and gray indicates process stages.

[![Research, submission, review, publication, and resubmission, with agent assistance for implementation, experiments, screening, and reviewer matching]({{ '/img/agent-native-systems-conference/workflow-en.svg' | relative_url }})]({{ '/img/agent-native-systems-conference/workflow-en.svg' | relative_url }})

### Make research conclusions open to scrutiny

To discourage authors from using outputs they have not understood, conferences can start by setting clear expectations in the CFP and review criteria. Authors should explain why the research question matters, why key design choices were made, and which experiments or other evidence support the main conclusions. Reviews should identify specific gaps so that authors know what to add and the community's standards are communicated through feedback.

I believe **conferences should not require every submission to provide a reproducible environment**. Systems research may depend on particular hardware, production environments, or workloads that cannot readily be made public. Preparing such an environment for every project is not realistic. Artifact evaluation can remain voluntary; for example, SOSP 2026's artifact evaluation[^sosp-2026] is optional.

Reviewers should assess the importance of the problem, the suitability of evaluation methods, the fairness of comparisons, and whether the evidence supports the claims. When they have doubts, they should identify specific issues for authors to address with additional evidence or corrected conclusions after receiving the decision. Authors who can do so may voluntarily share code, data, or materials needed to reproduce the results for the community to examine and use.

These expectations concern research content and author responsibility, and apply equally to work with and without agents. Tools can generate code, run experiments, organize results, and even help discover errors, but they cannot take responsibility for a paper's mistakes or hallucinations. Fabricated references, incorrect experimental analyses, and unsupported conclusions remain **the authors' responsibility**, even when they originate with an agent. Each author is responsible for their own contributions, and the author team must ensure that the submission as a whole has been checked. When errors are found, authors must explain and correct them; they cannot shift responsibility to the tool.

### Use agents to screen submissions and give early feedback on CFP fit

Once the CFP is clear, the conference needs to give authors prompt feedback: does the paper fit the scope, and do the question and contribution warrant full review? I suggest that **conferences return screening decisions and specific reasons within one to two weeks of submission**.

A two-page abstract that explains the work on its own can give reviewers enough context for an initial assessment: does the work address the conference's research priorities, is the question worth investigating, and does the core contribution merit further review? It should explain the motivation, shortcomings of existing methods, central idea, and initial results so that peers can understand what the authors are trying to solve. ATC 2026's extended abstract guidelines[^atc-2026-abstract] offer a useful writing reference.

Screening decisions should have explicit reasons. After a paper passes screening, reviewers must still read the full text and examine the design, experiments, and conclusions. Work spanning fields or exploring new directions that are easily misunderstood should also be checked by peers familiar with the relevant questions. ASPLOS 2027's rapid review[^asplos-2027] offers a reference: reviewers read the first two pages of the main text, assess how the work advances the conference's core research areas and whether the PC has the expertise to review it, and return submissions early if the PC lacks sufficient expertise.

To complete screening promptly under high submission volume and limited reviewer time, I believe **this process must include agent assistance**. Based on the current public CFP and the two-page abstract or other required screening materials, an agent would summarize the research question and contribution, offer a preliminary judgment of "within scope," "possibly out of scope," or "needs clarification," and list the relevant passages in the CFP, locations in the paper, and reasons for its assessment.

Each conference could also provide an author-facing submission tool integrated into a system such as HotCRP. After authors upload a paper, an agent would read it, identify its research questions, methods, and contributions, and relate them to the current CFP to flag possible scope mismatches or points needing clarification, citing the relevant passages in the CFP and paper. Authors would no longer need to select research areas manually. If the agent misunderstood the work, they could revise the wording, add an explanation, or reconsider the submission venue.

The same analysis of a paper's content could also help match it with reviewers. Conferences could require each author to maintain and link at least one verifiable academic profile, such as ORCID, Google Scholar, or OpenReview; reviewers would provide similar profiles and indicate how many papers they could review. Based on the paper's questions and methods, together with the research experience and expertise in those profiles, an agent would recommend and assign suitable peers from the conference's selected reviewer pool, explaining the match. Work across fields could be assigned reviewers from different areas without being forced into a single author-selected category.

Agents should also identify conflicts of interest automatically, without relying on authors to declare them individually during submission. Using linked academic profiles and other information the conference is authorized to use, the system could check relationships such as coauthorship, institutional affiliations, and advisor–student ties between authors and candidate reviewers, then exclude unsuitable candidates according to the conference's published conflict types and applicable time windows.

### Decide directly after review and return feedback promptly

For papers that pass screening, I suggest **eliminating the rebuttal stage**. After reviewers complete full reviews and the PC finishes its internal discussion, the conference would directly accept or reject each paper and promptly send the decision and reviews to the authors. OSDI 2026[^osdi-2026] has already eliminated author responses. I propose combining that approach with prompt feedback so that authors receive decisions and reviews as soon as possible.

Rejection feedback should help authors understand what they can do next. The conference should explain the main reasons for its decision: whether the question or contribution falls short, the evidence is insufficient, the work is outside its scope, or it lacks suitable reviewers. For concerns about the paper's content, reviews should identify the relevant passages. Authors can then add experiments, revise conclusions, or strengthen arguments before choosing a suitable conference for their next submission.

## How conferences can cooperate on resubmissions

After receiving a decision, authors may revise their work and submit it elsewhere. Conferences need to consider together how to use previous reviews and reduce repeated effort while preserving independent judgment in each round.

### Use version differences to understand research progress

For a resubmission, authors can provide the version they actually submitted previously and a statement of changes, explaining how the problem framing, system design, experiments, and conclusions have changed. An agent can help produce a summary of changes with references to the relevant sections and figures. It would distinguish wording edits from changes to methods, new evidence, and revised conclusions, so that authors can correct the summary and reviewers can check it.

### Can submission history bias reviewers?

Knowing a paper's submission history can affect a reviewer's judgment. If reviewers know in advance that another conference rejected a paper, they may read it with negative expectations and more readily accept reasons supporting rejection.

In a randomized experiment conducted in 2020,[^prior-and-prejudice] Stelmakh and colleagues asked 133 novice reviewers to evaluate 19 papers. Reviewers who were told in advance that a paper had been rejected by a similar conference gave it an overall score that was, on average, 0.78 points lower on a ten-point scale. The 95% confidence interval for this decrease was 0.24 to 1.30 points.

One approach worth testing separates checks for compliance with submission rules from the initial assessment of the research. Authorized chairs would first check submission history and overlapping review periods. Reviewers would record an independent initial assessment of the paper submitted in the current round before seeing the relevant summaries of changes and unresolved issues. OSDI 2027[^osdi-2027] and SOSP 2026[^sosp-2026] already show resubmission statements only after reviews have been completed.

Earlier reviews can identify technical issues worth continuing to address, and authors should explain why they did not adopt a specific suggestion. For disputed papers, peers who did not participate in the previous round can be invited to review the work.

### Sharing submission information across conferences and establishing a submission ban policy

Reducing repeated effort also requires cooperation across conferences. OSDI, SOSP, ATC, ASPLOS, EuroSys, NSDI, SoCC, and others could agree on a system for sharing submission records with restricted access. These records would include identifiers for the work and each submitted version, authors, submission and withdrawal times, decision times, and whether the paper remains under review. Access would be limited to authorized chairs or verification staff, with access logs retained.

Authors would declare resubmission history and changes; tools would help compare versions and identify overlapping review periods; authorized staff would verify the results. This could help detect simultaneous submissions and determine whether authors complied with resubmission requirements announced in advance.

I suggest that conferences establish a clear policy for submission bans and publish which violations it covers, how cases will be investigated, and how they will be handled. It could apply to authors found responsible for simultaneous submissions or for resubmitting to another conference in violation of previously announced rules without substantive changes or a reasonable explanation. Before imposing a ban, authorized staff should verify the facts and determine each author's responsibility. Applying a ban at other participating conferences would require a separate agreement among those conferences. Submitting a paper to another conference after rejection does not, by itself, constitute misconduct simply because the paper is unchanged, especially if it was rejected for a mismatch in scope or reviewer expertise.

USENIX's current policy[^usenix-submissions] allows chairs to share information with other conference chairs or journal editors to maintain submission integrity, and permits measures including submission bans for a specified period.

## Make conferences a starting point for continuing research

An agent-native conference could extend research discussion to before submission and after acceptance. A community could publish experimental materials that participants voluntarily share and keep a running record of open questions and findings from efforts to reproduce previous results. Participants could use agents to explore new ideas and bring the resulting evidence back for discussion. Organizers would provide clear ways to participate and appropriate resources, and identify who is responsible for ongoing maintenance.

A focused session could bring researchers together to discuss unresolved questions: which experimental results conflict, what conditions explain the differences, and how to test them next. Conferences should also set aside time for prototype demonstrations and discussions of failed attempts and design trade-offs. Younger researchers should have opportunities to ask questions, present preliminary work, and find collaborators. Work that has not yet become a complete paper should also have a place in these discussions.

Sharing results, validating them over time, and meeting in person do not all have to follow the same schedule. For example, accepted SIGMOD papers[^sigmod-publications] are first published in PACMMOD, after which authors are invited to present at the conference, demonstrating one way to organize publication and conference presentations separately.

## Help research evaluation and doctoral training keep pace

Changes to conference processes will still be shaped by external incentives. If institutions evaluate researchers solely by the number of papers they publish at top conferences, researchers will continue to focus their efforts on increasing that number. As agents take on more implementation, experimentation, and writing, paper counts alone make it increasingly difficult to tell how much a researcher personally contributed.

Departments and hiring committees could start with a small selection of a researcher's work and a statement of their contributions, asking them to explain how they chose questions, made key design decisions, planned and carried out validation, dealt with failure, and revised their judgments. DORA's call to assess research on its content and recognize diverse research outputs[^dora] offers a reference.

Doctoral training could likewise assess the decisions students make during research: why this question was chosen, why these baselines were used, what a failed experiment reveals, and which conclusions still hold when resources or workloads change. Students need to explain and defend the research they helped complete, including code and experiments generated by agents.

## Looking ahead

I hope an agent-native conference for systems research can bring together researchers who care about shared questions, help them use agents to implement ideas and validate results faster, and attract like-minded peers.

Agents can help us screen and match papers quickly so that authors receive feedback sooner. Researchers and reviewers must still take responsibility for papers and reviews. They must judge whether the research question matters, whether the evidence is reliable, and whether the contribution is valuable.

This would free up more time and energy to explore the questions we consider most important. With new tools, more researchers may have an opportunity to revisit areas that were once difficult to enter, such as consistency and fault tolerance in distributed systems, or isolation and resource management in operating systems. Are existing designs already good enough? As technologies and applications change, what questions are worth revisiting? I hope more researchers will take up these questions and contribute new insights to systems research.

A conference leaves behind more than proceedings. It also leaves a community that continues to exchange ideas and a body of work that others can test and improve. Each year's discussions can become the starting point for the next stage of research. Standing on the shoulders of those who came before us, we can see further.

## References

[^osdi-2027]: [OSDI 2027 Call for Papers](https://www.usenix.org/conference/osdi27/call-for-papers)

[^sosp-2026]: [SOSP 2026 Call for Papers](https://sigops.org/s/conferences/sosp/2026/cfp.html)

[^asplos-2027]: [ASPLOS 2027 Call for Papers](https://www.asplos-conference.org/asplos2027/cfp/)

[^osdi-2026]: [OSDI 2026 Call for Papers](https://www.usenix.org/conference/osdi26/call-for-papers)

[^nsdi-2027]: [NSDI 2027 Call for Papers](https://www.usenix.org/conference/nsdi27/call-for-papers)

[^atc-2026]: [ATC 2026 Call for Papers](https://sigops.org/s/conferences/atc/2026/cfp.html)

[^eurosys-2027]: [EuroSys 2027 Call for Papers](https://2027.eurosys.org/cfp.html)

[^socc-2026]: [SoCC 2026 Call for Papers](https://acmsocc.org/2026/papers.html)

[^mlsys-2027]: [MLSys 2027 Call for Research Papers](https://mlsys.org/Conferences/2027/CallForResearchPapers)

[^iclr-2027]: [ICLR 2027 Author Guidelines](https://iclr.cc/Conferences/2027/AuthorGuidelines)

[^icml-2026]: [ICML 2026 Peer Review FAQ](https://icml.cc/Conferences/2026/PeerReviewFAQ)

[^sigcomm-pc]: [ACM SIGCOMM: On Program Committees and Social Networking at Conferences](https://sigcomm.sigcomm.hosting2.acm.org/content/gurus-column-acm-sigcomm-student-mentoring-column)

[^sigplan-pc]: [Guidelines for the Program Chair of a SIGPLAN Event](https://www.sigplan-www.sigplan.hosting.acm.org/Resources/Guidelines/ProChair/)

[^dijkstra-golden-rules]: [Edsger W. Dijkstra, The Three Golden Rules for Successful Scientific Research](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD637.html)

[^systems-evaluation]: [The Many Faces of Systems Research—and How to Evaluate Them](https://usenix.org/legacy/events/hotos05/final_papers/full_papers/red_team/red_html/paper.html)

[^atc-2026-abstract]: [ATC 2026 Extended Abstract Guidelines](https://sigops.org/s/conferences/atc/2026/abstract.html)

[^prior-and-prejudice]: [Prior and Prejudice: The Novice Reviewers' Bias against Resubmissions in Conference Peer Review](https://arxiv.org/abs/2011.14646)

[^usenix-submissions]: [USENIX Conference Submissions Policy](https://www.usenix.org/conferences/author-resources/submissions-policy)

[^sigmod-publications]: [SIGMOD Publications](https://sigmod.org/publications/publications/)

[^dora]: [San Francisco Declaration on Research Assessment](https://sfdora.org/read/)
