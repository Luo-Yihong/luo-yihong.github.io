---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


Short Bio
===
I am a final year PhD student at [Hong Kong University of Science and Technology](https://hkust.edu.hk/), supervised by Prof. [Jing Tang](https://scholar.google.com/citations?hl=zh-CN&user=0S4cpyoAAAAJ). My research interests are developing **Efficient Generative Models**, and building **Few-Step Text-to-Image/Video Diffusion Models** for high-quality and real-time generation. I am also interested in **Graph Neural Networks**.

Academic Service: reviewer for ICML, ICLR, NeurIPS, CVPR, ICCV, etc.

> I am expecting to graduate in December 2025 and am actively seeking opportunities in industrial research roles within China and the broader Asian region. If you are interested in discussing potential opportunities, please don't hesitate to reach out.

> If you're interested in collaborating or exploring potential research opportunities, please don't hesitate to reach out (带带哥们). 


News
===
- **<font style = "color:#FF8000">[06/2025]</font>** Two papers are accpeted by ICCV🎉🎉🎉: 1) <a href="https://tdm-t2x.github.io/">TDM</a> -- SOTA few-step text-to-image genertion; 2) <a href="https://arxiv.org/abs/2503.06652">JDM</a> -- the first algorithm that can add additional control *unkown to teacher* to one-step student.
- **<font style = "color:#FF8000">[06/2025]</font>** We release <a href="https://arxiv.org/abs/2506.19741">NCT</a>, a novel approach for adding new controls to one-step generator directly. **NCT is the first algorithm that enables adding controls to one-step generator without relying on diffusion distillation or images**.
- **<font style = "color:#FF8000">[04/2025]</font>** Delivered an invited talk at ByteDance about Efficient Post-Training of Diffusion Models (Diffusion Distilattion and RLHF). 
- **<font style = "color:#FF8000">[03/2025]</font>** We release <a href="https://arxiv.org/abs/2503.13070">R0</a>, a novel conditional generation approach via regularized reward maximization. **R0 is the first RLHF algorithm that enables post-training diffusion to few-step text-to-image generator without relying on diffusion distillation or images**.
- **<font style = "color:#FF8000">[03/2025]</font>** We release <a href="https://tdm-t2x.github.io/">TDM</a>, unifying the trajectory distillation and distribution matching. TDM can distill pre-trained DMs to a few-step generator with better performance with extremely low cost. In particular, TDM distills PixArt to a 4-step generator with **2 A800 hours and outperforms teacher regarding real user preference**.
- **<font style = "color:#FF8000">[03/2025]</font>** We release <a href="https://arxiv.org/abs/2503.06652">JDM</a>, a method can add additional control *unkown to teacher* to one-step student. Moreover, JDM decouples the condition learning and fidelity learning, enabling improved usage of classifier-free guidance (CFG) and seamless integration of **human feedback learning** (HFL).
- **<font style = "color:#FF8000">[01/2025]</font>** Two first/co-first author papers accepted to ***ICLR 2025***.


Publications
===

(<em><sup>*</sup> denotes co-first authors</em>)

<strong><font style="color:#1f57b8">Noise Consistency Training: A Native Approach for One-Step Generator in Learning Additional Controls
</font></strong><br />
**Yihong Luo**, Shuchen Xue, Tianyang Hu, Jing Tang <br />
Preprint, 2025 <br />
[[Paper]](https://arxiv.org/abs/2506.19741) <br />

<strong><font style="color:#1f57b8">Rewards Are Enough for Fast Photo-Realistic Text-to-image Generation
</font></strong><br />
**Yihong Luo**, Tianyang Hu, Weijian Luo, Kenji Kawaguchi, Jing Tang <br />
Preprint, 2025 <br />
[[Paper]](https://arxiv.org/abs/2503.13070) <br />

<strong><font style="color:#1f57b8">Learning Few-Step Diffusion Models by Trajectory Distribution Matching
</font></strong><br />
**Yihong Luo**, Tianyang Hu, Jiacheng Sun, Yujun Cai, Jing Tang <br />
ICCV 2025 <br />
[[Paper]](https://arxiv.org/abs/2503.06674) <br />

<strong><font style="color:#1f57b8">Adding Additional Control to One-Step Diffusion with Joint Distribution Matching
</font></strong><br />
**Yihong Luo**, Tianyang Hu, Yifan Song, Jiacheng Sun, Zhenguo Li, Jing Tang <br />
ICCV 2025 <br />
[[Paper]](https://arxiv.org/abs/2503.06652) <br />


<strong><font style="color:#1f57b8">You Only Sample Once: Taming One-Step Text-to-Image Synthesis by Self-Cooperative Diffusion GANs</font></strong><br />
**Yihong Luo**, Xiaolong Chen, Xinghua Qu, Tianyang Hu, Jing Tang <br />
ICLR 2025 <br />
[[Paper]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9VfuwdsAAAAJ&citation_for_view=9VfuwdsAAAAJ:IjCSPb-OGe4C) <br />

<strong><font style="color:#1f57b8">Decoupled Graph Energy-based Model for Node Out-of-Distribution Detection on Heterophilic Graphs</font></strong><br />
Yuhan Chen<sup>*</sup>, **Yihong Luo**<sup>*</sup>, Yifan Song, Pengwen Dai, Jing Tang, and Xiaochun Cao <br />
ICLR 2025 <br />
[[Paper]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9VfuwdsAAAAJ&citation_for_view=9VfuwdsAAAAJ:Y0pCki6q_DkC) <br />

<strong><font style="color:#1f57b8">Energy-Calibrated VAE with Test Time Free Lunch</font></strong><br />
**Yihong Luo**, Siya Qiu, Xingjian Tao, Yujun Cai, Jing Tang <br />
ECCV 2024 <br />
[[Paper]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9VfuwdsAAAAJ&citation_for_view=9VfuwdsAAAAJ:2osOgNQ5qMEC) <br />

<strong><font style="color:#1f57b8">Fast Graph Sharpness-Aware Minimization for Enhancing and Accelerating Few-Shot Node Classification</font></strong><br />
**Yihong Luo**<sup>*</sup>, Yuhan Chen<sup>*</sup>, Siya Qiu, Yiwei Wang, Chen Zhang, Yan Zhou, Xiaochun Cao, Jing Tang <br />
NeurIPS 2024 <br />
[[Paper]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9VfuwdsAAAAJ&citation_for_view=9VfuwdsAAAAJ:zYLM7Y9cAGgC) <br />

<strong><font style="color:#1f57b8">TO-FLOW: Efficient Continuous Normalizing Flows with Temporal Optimization adjoint with Moving Speed</font></strong><br />
Shian Du<sup>*</sup>, **Yihong Luo**<sup>*</sup>, Wei Chen<sup>*</sup>, Jian Xu, Delu Zeng <br />
CVPR 2022 <br />
[[Paper]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9VfuwdsAAAAJ&citation_for_view=9VfuwdsAAAAJ:qjMakFHDy7sC) <br />

<strong><font style="color:#1f57b8">LSGNN: Towards General Graph Neural Network in Node Classification by Local Similarity</font></strong><br />
Yuhan Chen<sup>*</sup>, **Yihong Luo**<sup>*</sup>, Jing Tang, Liang Yang, Siya Qiu, Chuan Wang, Xiaochun Cao <br />
IJCAI 2023 <br />
[[Paper]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9VfuwdsAAAAJ&citation_for_view=9VfuwdsAAAAJ:UeHWp8X0CEIC) <br />

<strong><font style="color:#1f57b8">SteadySeg: Improving Maritime Trajectory Staging by Steadiness Recognition</font></strong><br />
Siya Qiu, **Yihong Luo**, Qiong Luo, Jing Tang <br />
Ocean Engineering (JCR Q1) <br />
[[Paper]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9VfuwdsAAAAJ&citation_for_view=9VfuwdsAAAAJ:Tyk-4Ss8FVUC) <br />



Education
===
* 2022 --- 2025/12 (expected): **Ph.D.** in Data Science and Analytics, Hong Kong University of Science and Technology
* 2016 --- 2020: **B.Sc.** in Information Management and Information System, 	South China University of Technology

Experience
===
* <div>Diffusion Distillation Research Intern, Huawei Noah's Ark Lab</div> 
* <div>Research Assistant, Hong Kong University of Science and Technology</div> 

---
<script>
document.write("Last modifid at: "+document.lastModified+"" )
</script>

<a href="https://info.flagcounter.com/kdvh"><img src="https://s11.flagcounter.com/map/kdvh/size_s/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/" alt="Flag Counter" border="0"></a>
