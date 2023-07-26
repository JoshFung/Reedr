import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Post {
  id: number;
  by: string;
  descendants?: number;
  kids?: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string; // some posts do not open to new links, but rather are HN text posts
  text?: string; // HN text posts
}

interface PostsState {
  currentPostId: number;
  postsArray: Array<Post>;
  postIds: Array<number>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// TODO: later on remove this dummy data
const tempData = [
  {
    by: "Akronymus",
    descendants: 530,
    id: 36864624,
    kids: [
      36869754, 36865883, 36867078, 36867602, 36865730, 36866468, 36868954,
      36865636, 36865106, 36867716, 36866259, 36870440, 36870693, 36869100,
      36865518, 36867524, 36865556, 36870504, 36868990, 36867250, 36869216,
      36865498, 36867983, 36868835, 36867326, 36869088, 36865537, 36868962,
      36864625, 36870772, 36870379, 36868771, 36870180, 36866263, 36869281,
      36865261, 36866682, 36865861, 36869734, 36865058, 36868786, 36869324,
      36869675, 36867338, 36868465, 36870265, 36867098, 36869691, 36866688,
      36865805, 36865417, 36866634, 36864974, 36865687, 36867315, 36866514,
      36871368, 36869144, 36867976, 36867744, 36870419,
    ],
    score: 833,
    time: 1690301672,
    title: "The first room-temperature ambient-pressure superconductor?",
    type: "story",
    url: "https://arxiv.org/abs/2307.12008",
  },
  {
    by: "animal_spirits",
    descendants: 142,
    id: 36866861,
    kids: [
      36867651, 36871026, 36868735, 36867492, 36869299, 36867886, 36868029,
      36867974, 36867614, 36869658, 36868504, 36868458, 36868096, 36870872,
      36870011, 36869882, 36870336, 36870655, 36870633, 36869126, 36868287,
      36867637, 36867982, 36868749, 36870225, 36870058, 36869402, 36867319,
      36870138, 36871160, 36868784, 36867774, 36869175, 36867783, 36868348,
      36868367, 36868206,
    ],
    score: 271,
    time: 1690308831,
    title: "PRQL: Pipelined Relational Query Language",
    type: "story",
    url: "https://github.com/PRQL/prql",
  },
  {
    by: "bfirsh",
    descendants: 73,
    id: 36865495,
    kids: [
      36871455, 36871354, 36867718, 36870809, 36870470, 36867752, 36869495,
      36869330, 36870843, 36870594, 36869903, 36870387, 36870760, 36869653,
      36868941, 36869039, 36870622,
    ],
    score: 222,
    time: 1690304322,
    title: "Guide to running Llama 2 locally",
    type: "story",
    url: "https://replicate.com/blog/run-llama-locally",
  },
  {
    by: "davikr",
    descendants: 5,
    id: 36860488,
    kids: [36871154, 36871358, 36871409, 36871172],
    score: 28,
    time: 1690282399,
    title: "The Internet Free Zone (1997)",
    type: "story",
    url: "https://arachnoid.com/freezone/",
  },
  {
    by: "capableweb",
    descendants: 18,
    id: 36868940,
    kids: [
      36871502, 36870679, 36871461, 36871254, 36871072, 36871099, 36870719,
      36870536,
    ],
    score: 56,
    time: 1690317072,
    title: "Treemaps are awesome",
    type: "story",
    url: "https://blog.phronemophobic.com/treemaps-are-awesome.html",
  },
  {
    by: "Ivoah",
    descendants: 33,
    id: 36857069,
    kids: [
      36869237, 36868355, 36870095, 36868592, 36867799, 36868307, 36869465,
      36868126, 36869030, 36868662, 36869635, 36868326, 36869345, 36869407,
      36869977, 36869810, 36869878,
    ],
    score: 145,
    time: 1690251587,
    title: "Way ahead of its time: The Remote Lounge NYC",
    type: "story",
    url: "https://docpop.org/2013/10/way-ahead-of-its-time-the-remote-lounge-nyc/",
  },
  {
    by: "rendang",
    descendants: 21,
    id: 36870702,
    kids: [
      36871529, 36871155, 36871515, 36871270, 36871365, 36871481, 36871480,
      36871366, 36871224,
    ],
    score: 29,
    time: 1690324858,
    title: "Seattle in Progress",
    type: "story",
    url: "https://www.seattleinprogress.com/",
  },
  {
    by: "smartmic",
    descendants: 12,
    id: 36868978,
    kids: [36870549, 36870889, 36871165, 36870036, 36870895, 36870157],
    score: 56,
    time: 1690317219,
    title: "A command-line murder mystery (2014)",
    type: "story",
    url: "https://github.com/veltman/clmystery",
  },
  {
    by: "lanijuyi",
    descendants: 141,
    id: 36860898,
    kids: [
      36861160, 36862324, 36862474, 36871314, 36866871, 36861630, 36861926,
      36861136, 36870048, 36871255, 36861656, 36869484, 36867081, 36870546,
      36866048, 36862889, 36869292, 36863218, 36862156, 36868742, 36866716,
      36861191, 36861999, 36861931, 36862319, 36862584, 36870614, 36861858,
      36866767, 36861122, 36862454, 36861690, 36861937, 36861197, 36866544,
      36861945, 36862815, 36863513, 36862605, 36862002,
    ],
    score: 444,
    time: 1690285506,
    title:
      "Show HN: Invoice Dragon – An open source app to create PDF invoices",
    type: "story",
    url: "https://invoicedragon.com/",
  },
  {
    by: "o8vm",
    descendants: 59,
    id: 36865682,
    kids: [
      36868620, 36867643, 36868587, 36867889, 36869399, 36868533, 36865850,
    ],
    score: 107,
    time: 1690305038,
    title: "Octox: Unix-like OS in Rust inspired by xv6-riscv",
    type: "story",
    url: "https://github.com/o8vm/octox",
  },
  {
    by: "timshell",
    descendants: 60,
    id: 36865625,
    kids: [
      36867114, 36865946, 36868804, 36869626, 36865813, 36867163, 36868683,
      36865823, 36868236, 36869589, 36869786, 36868793, 36870787, 36868174,
      36869375, 36870153, 36865956, 36866404, 36865781, 36867621, 36867864,
      36868032,
    ],
    score: 65,
    text: 'Hi HN, we’re Mayank and Matt of Roundtable (<a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;">https:&#x2F;&#x2F;roundtable.ai&#x2F;</a>). We use LLMs to produce cheap, yet surprisingly useful, simulations of surveys. Specifically, we train LLMs on standard, curated survey datasets. This approach allows us to essentially build general-purpose models of human behavior and opinion. We combine this with a nice UI that lets users easily visualize and interpret the results.<p>Surveys are incredibly important for user and market research, but are expensive and take months to design, run, and analyze. By simulating responses, our users can get results in seconds and make decisions faster. See <a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;showcase">https:&#x2F;&#x2F;roundtable.ai&#x2F;showcase</a> for a bunch of examples, and <a href="https:&#x2F;&#x2F;www.loom.com&#x2F;share&#x2F;eb6fb27acebe48839dd561cf1546f131" rel="nofollow noreferrer">https:&#x2F;&#x2F;www.loom.com&#x2F;share&#x2F;eb6fb27acebe48839dd561cf1546f131</a> for a demo video.<p>Our product lets you add questions (e.g. “how old are you”) and conditions (e.g. “is a Hacker News user”) and then see how these affect the survey results. For example, the survey “Are you interested in buying an e-bike?” shows ‘yes’ 28% [1]. But if you narrow it down to people who own a Tesla, ‘yes’ jumps to 52% [2]. Another example: if you survey “where did you learn to code”, the question “how old are you?” makes a dramatic difference—for “45 or older” the answer is 55% “books” [3], but for “younger than 45” it’s 76% “online” [4]. One more: 5% of people answer “legroom” to the question “Which of the following factors is most important for choosing which airline to fly?” [5], and this jumps to 20% when you condition on people over six feet tall [6].<p>You wouldn’t think (well, we didn’t think) that such simulated surveys would work very well, but empirically they work a lot better than expected—we have run many surveys in the wild to validate Roundtable&#x27;s results (e.g. comparing age demographics to U.S. Census data). We’re still trying to figure out why. We believe that LLMs that are pre-trained on the public Internet have internalized a lot of information&#x2F;correlations about communities (e.g. Tesla drivers, Hacker News, etc.) and can reasonably approximate their behavior. In any case, researchers are seeing the same things that we are. A nice paper by a BYU group [7] discusses extracting sub-population information from GPT&#x2F;LLMs. A related paper from Microsoft [8] shows how GPT can simulate different human behaviors. It’s an active research topic, and we hope we can get a sense of the theoretical basis relatively soon.<p>Because these models are primarily trained on Internet data, they start out skewed towards the demographics of heavy Internet users (e.g., high-income, male). We addressed this by fine-tuning GPT on the GSS (General Social Survey [9] - the gold standard of demographic surveys in the US) so our models emulate a more representative U.S. population.<p>We’ve built a transparency feature that shows how similar your survey question is to the training data and thus gives a confidence metric of our accuracy. If you click ‘Investigate Results’, we report the most similar (in terms of cosine distance between LLM embeddings) GSS questions as a way of estimating how much extrapolation &#x2F; interpolation is going on. This doesn’t quite address the accuracy of the subpopulations &#x2F; conditioning questions (we are working on this), but we thought we are at a sufficiently advanced point to share what we’ve built with you all.<p>We&#x27;re graduating PhD students from Princeton University in cognitive science and AI. We ran a ton of surveys and behavioral experiments and were often frustrated with the pipeline. We were looking to leave academia, and saw an opportunity in making the survey pipeline better. User and market research is a big market, and many of the tools and methods the industry uses are clunky and slow. Mayank’s PhD work used large datasets and ML for developing interpretable scientific theories, and Matt’s developed complex experimental software to study coordinated group decision-making. We see Roundtable as operating at the intersection of our interests.<p>We charge per survey. We are targeting small and mid-market businesses who have market research teams, and ask for a minimum subscription amount. Pricing is at the bottom of our home page.<p>We are still in the early stages of building this product, and we’d love for you all to play around with the demo and provide us feedback. Let us know whatever you see - this is our first major endeavor into the private sector from academia, and we’re eager to hear whatever you have to say!<p>[1]: <a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;e02e92a9ad20fdd517182788f4ae7e1f96a849c0">https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;e02e92a9ad20fdd517182788f4ae7e...</a><p>[2]: <a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;6b4bf8740ad1945b08c0bf584c84c1202a5fec53">https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;6b4bf8740ad1945b08c0bf584c84c1...</a><p>[3] <a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;d701556248385d05ce5d26ce7fc776bb4d32fad0">https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;d701556248385d05ce5d26ce7fc776...</a><p>[4] <a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;8bd80babad042cf60d500ca28c40f7db413f553a">https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;8bd80babad042cf60d500ca28c40f7...</a><p>[5] <a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;0450d499048c089894c34fba514db4042eafb6c0">https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;0450d499048c089894c34fba514db4...</a><p>[6] <a href="https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;eeafc6de644632af303896ec19feb69ac4714e24">https:&#x2F;&#x2F;roundtable.ai&#x2F;sandbox&#x2F;eeafc6de644632af303896ec19feb6...</a><p>[7] <a href="https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2209.06899" rel="nofollow noreferrer">https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2209.06899</a><p>[8] <a href="https:&#x2F;&#x2F;openreview.net&#x2F;pdf?id=eYlLlvzngu" rel="nofollow noreferrer">https:&#x2F;&#x2F;openreview.net&#x2F;pdf?id=eYlLlvzngu</a><p>[9] <a href="https:&#x2F;&#x2F;www.norc.org&#x2F;research&#x2F;projects&#x2F;gss.html" rel="nofollow noreferrer">https:&#x2F;&#x2F;www.norc.org&#x2F;research&#x2F;projects&#x2F;gss.html</a>',
    time: 1690304832,
    title: "Launch HN: Roundtable (YC S23) – Using AI to Simulate Surveys",
    type: "story",
  },
  {
    by: "FabioFleitas",
    id: 36869457,
    score: 1,
    time: 1690318854,
    title:
      "Tesorio (YC S15) Is Hiring a Head of Marketing – join our 100% remote startup",
    type: "job",
    url: "https://jobs.lever.co/tesorio/10de016f-be07-4707-ac5c-7029f0398a17",
  },
  {
    by: "sbdchd",
    descendants: 46,
    id: 36870140,
    kids: [
      36871411, 36870778, 36870946, 36871025, 36871718, 36870874, 36872579,
      36871675, 36870771, 36870985, 36870830, 36870428, 36870852, 36870715,
      36870904, 36870730, 36870867, 36870752, 36870574, 36870381, 36870636,
    ],
    score: 121,
    time: 1690322160,
    title:
      "Whom the gods would destroy, they first give real-time analytics (2013)",
    type: "story",
    url: "https://mcfunley.com/whom-the-gods-would-destroy-they-first-give-real-time-analytics",
  },
  {
    by: "luu",
    descendants: 217,
    id: 36857314,
    kids: [
      36863174, 36857935, 36858930, 36859400, 36861404, 36872768, 36862983,
      36869176, 36860441, 36869307, 36858291, 36870741, 36861248, 36858178,
      36859789, 36858372, 36869917, 36859195, 36870714, 36859222, 36872398,
      36859272, 36859270, 36858258, 36863429, 36861219, 36863778, 36858385,
      36858671, 36869014, 36859119, 36861978, 36867764, 36859548, 36859917,
      36858382, 36858558, 36870063, 36859439, 36868971, 36859038, 36861529,
      36858157, 36869757, 36859710, 36857901, 36861604, 36862227, 36864569,
      36860771, 36867395, 36859040, 36857825, 36861619, 36858270, 36864793,
    ],
    score: 845,
    time: 1690254026,
    title:
      "Got called to a professor’s office after a complaint his SPARC4 was running slow",
    type: "story",
    url: "https://infosec.exchange/@paco/110772422266480371",
  },
  {
    by: "Tomte",
    descendants: 52,
    id: 36866242,
    kids: [
      36867796, 36867853, 36868880, 36867155, 36871811, 36868158, 36867294,
      36869821, 36870077, 36868849, 36871078, 36869290, 36870849, 36868951,
      36870183, 36867433, 36867200, 36869389, 36868086, 36869912, 36872402,
      36871032, 36870640, 36868040, 36866753,
    ],
    score: 97,
    time: 1690306837,
    title: "Hyperlink maximalism (2022)",
    type: "story",
    url: "https://thesephist.com/posts/hyperlink/",
  },
];

const initialState: PostsState = {
  currentPostId: 1,
  postsArray: tempData,
  postIds: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.postsArray;

export const selectPostById = (state: RootState, postId: number) => {
  state.posts.postsArray.find((post) => post.id === postId);
};
