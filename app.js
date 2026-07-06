const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;
const fallbackTdk = {
  title: "在线观看日本电影 - 高清日本电影免费在线观看",
  keywords: "在线观看日本电影,日本电影免费观看,高清日本电影,日本电影在线,日本电影推荐,日本电影大全,日本电影网站",
  description: "免费在线观看高清日本电影，提供最新日本电影、经典日本电影、日本动画电影在线观看，每日更新日本电影资源，支持手机电脑在线播放。"
};

function applyTdk(entry = fallbackTdk) {
  document.title = entry.title;
  document.querySelector("meta[name='keywords']")?.setAttribute("content", entry.keywords);
  document.querySelector("meta[name='description']")?.setAttribute("content", entry.description);
}

function parseTdkLine(line) {
  const parts = line.split("----").map((part) => part.trim());
  if (parts.length < 3 || parts[0] === "标题") return null;
  return { title: parts[0], keywords: parts[1], description: parts.slice(2).join("----") };
}

async function applyTdkFromFile() {
  try {
    const text = await fetch("./tdk.txt", { cache: "no-store" }).then((response) => {
      if (!response.ok) throw new Error("tdk not found");
      return response.text();
    });
    const entries = text.split(/\r?\n/).map(parseTdkLine).filter(Boolean);
    const selected = entries.find((entry) => entry.title.includes("在线观看日本电影") && entry.keywords.includes("日本电影网站"))
      || entries.find((entry) => entry.keywords.includes("日本电影在线"))
      || entries[0];
    applyTdk(selected || fallbackTdk);
  } catch {
    applyTdk(fallbackTdk);
  }
}

const items = [
  {
    "id": "jp-001",
    "title": "你的名字。",
    "originalTitle": "Your Name.",
    "kind": "动漫电影",
    "year": 2016,
    "score": "8.8",
    "genre": "爱情",
    "poster": "https://cdn.myanimelist.net/images/anime/5/87048l.jpg",
    "hot": 14963,
    "summary": "你的名字。是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-002",
    "title": "千与千寻",
    "originalTitle": "Spirited Away",
    "kind": "动漫电影",
    "year": 2001,
    "score": "9.1",
    "genre": "奇幻",
    "poster": "https://cdn.myanimelist.net/images/anime/6/79597l.jpg",
    "hot": 14926,
    "summary": "千与千寻是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-003",
    "title": "声之形",
    "originalTitle": "A Silent Voice",
    "kind": "动漫电影",
    "year": 2016,
    "score": "8.7",
    "genre": "青春",
    "poster": "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg",
    "hot": 14889,
    "summary": "声之形是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-004",
    "title": "灌篮高手 THE FIRST SLAM DUNK",
    "originalTitle": "The First Slam Dunk",
    "kind": "动漫电影",
    "year": 2022,
    "score": "8.9",
    "genre": "运动",
    "poster": "https://cdn.myanimelist.net/images/anime/1745/129284l.jpg",
    "hot": 14852,
    "summary": "灌篮高手 THE FIRST SLAM DUNK是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-005",
    "title": "铃芽之旅",
    "originalTitle": "Suzume",
    "kind": "动漫电影",
    "year": 2022,
    "score": "8.3",
    "genre": "奇幻",
    "poster": "https://cdn.myanimelist.net/images/anime/1598/128450l.jpg",
    "hot": 14815,
    "summary": "铃芽之旅是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-006",
    "title": "天气之子",
    "originalTitle": "Weathering With You",
    "kind": "动漫电影",
    "year": 2019,
    "score": "8.2",
    "genre": "奇幻",
    "poster": "https://cdn.myanimelist.net/images/anime/1880/101146l.jpg",
    "hot": 14778,
    "summary": "天气之子是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-007",
    "title": "言叶之庭",
    "originalTitle": "The Garden of Words",
    "kind": "动漫电影",
    "year": 2013,
    "score": "8.1",
    "genre": "爱情",
    "poster": "https://cdn.myanimelist.net/images/anime/1597/112995l.jpg",
    "hot": 14741,
    "summary": "言叶之庭是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-008",
    "title": "萤火虫之墓",
    "originalTitle": "Grave of the Fireflies",
    "kind": "动漫电影",
    "year": 1988,
    "score": "8.5",
    "genre": "战争",
    "poster": "https://cdn.myanimelist.net/images/anime/7/75808l.jpg",
    "hot": 14704,
    "summary": "萤火虫之墓是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-009",
    "title": "哈尔的移动城堡",
    "originalTitle": "Howl's Moving Castle",
    "kind": "动漫电影",
    "year": 2004,
    "score": "8.7",
    "genre": "奇幻",
    "poster": "https://cdn.myanimelist.net/images/anime/1470/138723l.jpg",
    "hot": 14667,
    "summary": "哈尔的移动城堡是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-010",
    "title": "龙猫",
    "originalTitle": "My Neighbor Totoro",
    "kind": "动漫电影",
    "year": 1988,
    "score": "8.6",
    "genre": "治愈",
    "poster": "https://cdn.myanimelist.net/images/anime/4/75923l.jpg",
    "hot": 14630,
    "summary": "龙猫是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-011",
    "title": "幽灵公主",
    "originalTitle": "Princess Mononoke",
    "kind": "动漫电影",
    "year": 1997,
    "score": "8.8",
    "genre": "奇幻",
    "poster": "https://cdn.myanimelist.net/images/anime/7/75919l.jpg",
    "hot": 14593,
    "summary": "幽灵公主是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-012",
    "title": "红猪",
    "originalTitle": "Porco Rosso",
    "kind": "动漫电影",
    "year": 1992,
    "score": "8.2",
    "genre": "冒险",
    "poster": "https://cdn.myanimelist.net/images/anime/6/2878l.jpg",
    "hot": 14556,
    "summary": "红猪是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-013",
    "title": "天空之城",
    "originalTitle": "Castle in the Sky",
    "kind": "动漫电影",
    "year": 1986,
    "score": "8.3",
    "genre": "冒险",
    "poster": "https://cdn.myanimelist.net/images/anime/5/37799l.jpg",
    "hot": 14519,
    "summary": "天空之城是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-014",
    "title": "起风了",
    "originalTitle": "The Wind Rises",
    "kind": "动漫电影",
    "year": 2013,
    "score": "8.1",
    "genre": "传记",
    "poster": "https://cdn.myanimelist.net/images/anime/8/52353l.jpg",
    "hot": 14482,
    "summary": "起风了是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-015",
    "title": "狼的孩子雨和雪",
    "originalTitle": "Wolf Children",
    "kind": "动漫电影",
    "year": 2012,
    "score": "8.6",
    "genre": "家庭",
    "poster": "https://cdn.myanimelist.net/images/anime/9/35721l.jpg",
    "hot": 14445,
    "summary": "狼的孩子雨和雪是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-016",
    "title": "穿越时空的少女",
    "originalTitle": "The Girl Who Leapt Through Time",
    "kind": "动漫电影",
    "year": 2006,
    "score": "8.1",
    "genre": "青春",
    "poster": "https://cdn.myanimelist.net/images/anime/1/2432l.jpg",
    "hot": 14408,
    "summary": "穿越时空的少女是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-017",
    "title": "Cool Japan",
    "originalTitle": "Cool Japan",
    "kind": "日剧",
    "year": 2007,
    "score": "7.8",
    "genre": "剧情",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/153/382647.jpg",
    "hot": 13844,
    "summary": "Cool Japan是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-018",
    "title": "Ramen Japan",
    "originalTitle": "Ramen Japan",
    "kind": "综艺纪录",
    "year": 2023,
    "score": "7.8",
    "genre": "Food",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/529/1322888.jpg",
    "hot": 13803,
    "summary": "Ramen Japan是日本电影网片库中的综艺纪录内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-019",
    "title": "Yakitate!! Japan",
    "originalTitle": "Yakitate!! Japan",
    "kind": "动漫电影",
    "year": 2004,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/296/740217.jpg",
    "hot": 13762,
    "summary": "Yakitate!! Japan是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-020",
    "title": "24 Japan",
    "originalTitle": "24 Japan",
    "kind": "日剧",
    "year": 2020,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/276/692343.jpg",
    "hot": 13721,
    "summary": "24 Japan是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-021",
    "title": "Time-lapse Japan",
    "originalTitle": "Time-lapse Japan",
    "kind": "日剧",
    "year": 2018,
    "score": "7.8",
    "genre": "剧情",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/596/1490842.jpg",
    "hot": 13680,
    "summary": "Time-lapse Japan是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-022",
    "title": "Folktales from Japan",
    "originalTitle": "Folktales from Japan",
    "kind": "动漫电影",
    "year": 2012,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/66/166070.jpg",
    "hot": 13639,
    "summary": "Folktales from Japan是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-023",
    "title": "Japan Sinks: 2020",
    "originalTitle": "Japan Sinks: 2020",
    "kind": "动漫电影",
    "year": 2020,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/260/651975.jpg",
    "hot": 13598,
    "summary": "Japan Sinks: 2020是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-024",
    "title": "Journey Across Japan",
    "originalTitle": "Journey Across Japan",
    "kind": "综艺纪录",
    "year": 2018,
    "score": "7.8",
    "genre": "Travel",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/331/828446.jpg",
    "hot": 13557,
    "summary": "Journey Across Japan是日本电影网片库中的综艺纪录内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-025",
    "title": "Produce 101 Japan",
    "originalTitle": "Produce 101 Japan",
    "kind": "日剧",
    "year": 2019,
    "score": "7.8",
    "genre": "剧情",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/212/531356.jpg",
    "hot": 13516,
    "summary": "Produce 101 Japan是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-026",
    "title": "Cycle Around Japan",
    "originalTitle": "Cycle Around Japan",
    "kind": "综艺纪录",
    "year": 2014,
    "score": "7.8",
    "genre": "Travel",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/151/379863.jpg",
    "hot": 13475,
    "summary": "Cycle Around Japan是日本电影网片库中的综艺纪录内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-027",
    "title": "Tokyo Vice",
    "originalTitle": "Tokyo Vice",
    "kind": "日剧",
    "year": 2022,
    "score": "7.6",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/502/1256479.jpg",
    "hot": 13434,
    "summary": "Tokyo Vice是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-028",
    "title": "Tokyo Ghoul",
    "originalTitle": "Tokyo Ghoul",
    "kind": "动漫电影",
    "year": 2014,
    "score": "7.4",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/604/1510953.jpg",
    "hot": 13393,
    "summary": "Tokyo Ghoul是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-029",
    "title": "Tokyo Revengers",
    "originalTitle": "Tokyo Revengers",
    "kind": "动漫电影",
    "year": 2021,
    "score": "7.1",
    "genre": "Action",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/546/1366123.jpg",
    "hot": 13352,
    "summary": "Tokyo Revengers是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-030",
    "title": "Tokyo Override",
    "originalTitle": "Tokyo Override",
    "kind": "动漫电影",
    "year": 2024,
    "score": "7.8",
    "genre": "Anime",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/540/1351169.jpg",
    "hot": 13311,
    "summary": "Tokyo Override是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-031",
    "title": "Tokyo Ravens",
    "originalTitle": "Tokyo Ravens",
    "kind": "动漫电影",
    "year": 2013,
    "score": "6.8",
    "genre": "Action",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/11/28748.jpg",
    "hot": 13270,
    "summary": "Tokyo Ravens是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-032",
    "title": "Tokyo Swindlers",
    "originalTitle": "Tokyo Swindlers",
    "kind": "日剧",
    "year": 2024,
    "score": "4.9",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/526/1316583.jpg",
    "hot": 13229,
    "summary": "Tokyo Swindlers是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-033",
    "title": "Newsroom Tokyo",
    "originalTitle": "Newsroom Tokyo",
    "kind": "综艺纪录",
    "year": 2015,
    "score": "7.8",
    "genre": "纪实",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/55/139342.jpg",
    "hot": 13188,
    "summary": "Newsroom Tokyo是日本电影网片库中的综艺纪录内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-034",
    "title": "Tokyo Sunshower",
    "originalTitle": "Tokyo Sunshower",
    "kind": "日剧",
    "year": 2008,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/62/155968.jpg",
    "hot": 13147,
    "summary": "Tokyo Sunshower是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-035",
    "title": "Tokyo Trial",
    "originalTitle": "Tokyo Trial",
    "kind": "日剧",
    "year": 2016,
    "score": "7.3",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/104/261096.jpg",
    "hot": 13106,
    "summary": "Tokyo Trial是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-036",
    "title": "Tokyo Control",
    "originalTitle": "Tokyo Control",
    "kind": "日剧",
    "year": 2012,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/8/20918.jpg",
    "hot": 13065,
    "summary": "Tokyo Control是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-037",
    "title": "Magical Japanese",
    "originalTitle": "Magical Japanese",
    "kind": "日剧",
    "year": 2021,
    "score": "7.8",
    "genre": "剧情",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/384/960639.jpg",
    "hot": 13024,
    "summary": "Magical Japanese是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-038",
    "title": "Yamishibai: Japanese Ghost Stories",
    "originalTitle": "Yamishibai: Japanese Ghost Stories",
    "kind": "动漫电影",
    "year": 2013,
    "score": "6.9",
    "genre": "Anime",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/116/290655.jpg",
    "hot": 12983,
    "summary": "Yamishibai: Japanese Ghost Stories是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-039",
    "title": "Great Japanese Railway Journeys",
    "originalTitle": "Great Japanese Railway Journeys",
    "kind": "综艺纪录",
    "year": 2026,
    "score": "7.8",
    "genre": "Travel",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/621/1553586.jpg",
    "hot": 12942,
    "summary": "Great Japanese Railway Journeys是日本电影网片库中的综艺纪录内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-040",
    "title": "Tsurune",
    "originalTitle": "Tsurune",
    "kind": "动漫电影",
    "year": 2018,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/132/332075.jpg",
    "hot": 12901,
    "summary": "Tsurune是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-041",
    "title": "99 Years of Love - Japanese Americans",
    "originalTitle": "99 Years of Love - Japanese Americans",
    "kind": "日剧",
    "year": 2010,
    "score": "7.8",
    "genre": "Drama",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/59/148980.jpg",
    "hot": 12860,
    "summary": "99 Years of Love - Japanese Americans是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-042",
    "title": "Neko Neko Nihonshi",
    "originalTitle": "Neko Neko Nihonshi",
    "kind": "动漫电影",
    "year": 2016,
    "score": "7.8",
    "genre": "Comedy",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/59/147734.jpg",
    "hot": 12819,
    "summary": "Neko Neko Nihonshi是日本电影网片库中的动漫电影内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-043",
    "title": "Easy Travel Japanese",
    "originalTitle": "Easy Travel Japanese",
    "kind": "综艺纪录",
    "year": 2017,
    "score": "7.8",
    "genre": "Travel",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/327/817948.jpg",
    "hot": 12778,
    "summary": "Easy Travel Japanese是日本电影网片库中的综艺纪录内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-044",
    "title": "Monty Don's Japanese Gardens",
    "originalTitle": "Monty Don's Japanese Gardens",
    "kind": "日剧",
    "year": 2019,
    "score": "7.8",
    "genre": "剧情",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/295/738320.jpg",
    "hot": 12737,
    "summary": "Monty Don's Japanese Gardens是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-045",
    "title": "Japanese Style Originator",
    "originalTitle": "Japanese Style Originator",
    "kind": "日剧",
    "year": 2008,
    "score": "7.8",
    "genre": "剧情",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/117/294456.jpg",
    "hot": 12696,
    "summary": "Japanese Style Originator是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-046",
    "title": "Mental Samurai",
    "originalTitle": "Mental Samurai",
    "kind": "日剧",
    "year": 2019,
    "score": "5.4",
    "genre": "剧情",
    "poster": "https://static.tvmaze.com/uploads/images/original_untouched/328/820616.jpg",
    "hot": 12655,
    "summary": "Mental Samurai是日本电影网片库中的日剧内容，图片采用与片名对应的海报或剧照，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-047",
    "title": "Chainsaw Man – The Movie: Reze Arc",
    "originalTitle": "劇場版 チェンソーマン レゼ篇",
    "kind": "动漫电影",
    "year": 2025,
    "score": "9.1",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1763/150638l.jpg",
    "hot": 12666,
    "summary": "Chainsaw Man – The Movie: Reze Arc是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-048",
    "title": "Gintama: The Very Final",
    "originalTitle": "銀魂 THE FINAL",
    "kind": "动漫电影",
    "year": 2021,
    "score": "9.1",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1245/116760l.jpg",
    "hot": 12637,
    "summary": "Gintama: The Very Final是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-049",
    "title": "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya",
    "originalTitle": "劇場版 銀魂 完結篇 万事屋よ永遠なれ",
    "kind": "动漫电影",
    "year": 2013,
    "score": "8.9",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/10/51723l.jpg",
    "hot": 12608,
    "summary": "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-050",
    "title": "Attack on Titan: The Last Attack",
    "originalTitle": "劇場版 進撃の巨人 完結編 THE LAST ATTACK",
    "kind": "动漫电影",
    "year": 2024,
    "score": "8.8",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1379/145452l.jpg",
    "hot": 12579,
    "summary": "Attack on Titan: The Last Attack是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-051",
    "title": "Violet Evergarden: The Movie",
    "originalTitle": "劇場版 ヴァイオレット・エヴァーガーデン",
    "kind": "动漫电影",
    "year": 2020,
    "score": "8.8",
    "genre": "Award Winning",
    "poster": "https://cdn.myanimelist.net/images/anime/1825/110716l.jpg",
    "hot": 12550,
    "summary": "Violet Evergarden: The Movie是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-052",
    "title": "Kizumonogatari Part 3: Cold-Blooded",
    "originalTitle": "傷物語〈Ⅲ冷血篇〉",
    "kind": "动漫电影",
    "year": 2017,
    "score": "8.8",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1084/112813l.jpg",
    "hot": 12521,
    "summary": "Kizumonogatari Part 3: Cold-Blooded是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-053",
    "title": "Kaguya-sama: Love is War -The First Kiss That Never Ends-",
    "originalTitle": "かぐや様は告らせたい -ファーストキッスは終わらない-",
    "kind": "动漫电影",
    "year": 2022,
    "score": "8.7",
    "genre": "Comedy",
    "poster": "https://cdn.myanimelist.net/images/anime/1670/130060l.jpg",
    "hot": 12492,
    "summary": "Kaguya-sama: Love is War -The First Kiss That Never Ends-是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-054",
    "title": "The Legend of Hei 2",
    "originalTitle": "罗小黑战记2",
    "kind": "动漫电影",
    "year": 2025,
    "score": "8.7",
    "genre": "Adventure",
    "poster": "https://cdn.myanimelist.net/images/anime/1288/151853l.jpg",
    "hot": 12463,
    "summary": "The Legend of Hei 2是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-055",
    "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Infinity Castle - Part 1: Akaza Returns",
    "originalTitle": "劇場版 鬼滅の刃 無限城編 第一章 猗窩座再来",
    "kind": "动漫电影",
    "year": 2025,
    "score": "8.7",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1681/148216l.jpg",
    "hot": 12434,
    "summary": "Demon Slayer: Kimetsu no Yaiba - The Movie: Infinity Castle - Part 1: Akaza Returns是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-056",
    "title": "Umamusume: Pretty Derby - Beginning of a New Era",
    "originalTitle": "ウマ娘 プリティーダービー 新時代の扉",
    "kind": "动漫电影",
    "year": 2024,
    "score": "8.6",
    "genre": "Sports",
    "poster": "https://cdn.myanimelist.net/images/anime/1427/142210l.jpg",
    "hot": 12405,
    "summary": "Umamusume: Pretty Derby - Beginning of a New Era是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-057",
    "title": "Fate/stay night: Heaven's Feel - III. Spring Song",
    "originalTitle": "劇場版「Fate/stay night [Heaven's Feel] III.spring song」",
    "kind": "动漫电影",
    "year": 2020,
    "score": "8.6",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1142/112957l.jpg",
    "hot": 12376,
    "summary": "Fate/stay night: Heaven's Feel - III. Spring Song是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-058",
    "title": "Haikyu!! Movie: The Dumpster Battle",
    "originalTitle": "劇場版ハイキュー!! ゴミ捨て場の決戦",
    "kind": "动漫电影",
    "year": 2024,
    "score": "8.6",
    "genre": "Sports",
    "poster": "https://cdn.myanimelist.net/images/anime/1665/140360l.jpg",
    "hot": 12347,
    "summary": "Haikyu!! Movie: The Dumpster Battle是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-059",
    "title": "Look Back",
    "originalTitle": "ルックバック",
    "kind": "动漫电影",
    "year": 2024,
    "score": "8.6",
    "genre": "Award Winning",
    "poster": "https://cdn.myanimelist.net/images/anime/1716/142633l.jpg",
    "hot": 12318,
    "summary": "Look Back是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-060",
    "title": "Gurren Lagann The Movie: The Lights in the Sky are Stars",
    "originalTitle": "劇場版 天元突破グレンラガン 螺巌篇",
    "kind": "动漫电影",
    "year": 2009,
    "score": "8.6",
    "genre": "Sci-Fi",
    "poster": "https://cdn.myanimelist.net/images/anime/12/19698l.jpg",
    "hot": 12289,
    "summary": "Gurren Lagann The Movie: The Lights in the Sky are Stars是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-061",
    "title": "Made in Abyss: Dawn of the Deep Soul",
    "originalTitle": "劇場版メイドインアビス 深き魂の黎明",
    "kind": "动漫电影",
    "year": 2020,
    "score": "8.6",
    "genre": "Adventure",
    "poster": "https://cdn.myanimelist.net/images/anime/1803/117183l.jpg",
    "hot": 12260,
    "summary": "Made in Abyss: Dawn of the Deep Soul是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-062",
    "title": "Rascal Does Not Dream of a Dreaming Girl",
    "originalTitle": "青春ブタ野郎はゆめみる少女の夢を見ない",
    "kind": "动漫电影",
    "year": 2019,
    "score": "8.6",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/1613/102179l.jpg",
    "hot": 12231,
    "summary": "Rascal Does Not Dream of a Dreaming Girl是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-063",
    "title": "The Disappearance of Haruhi Suzumiya",
    "originalTitle": "涼宮ハルヒの消失",
    "kind": "动漫电影",
    "year": 2010,
    "score": "8.6",
    "genre": "Award Winning",
    "poster": "https://cdn.myanimelist.net/images/anime/1248/112352l.jpg",
    "hot": 12202,
    "summary": "The Disappearance of Haruhi Suzumiya是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-064",
    "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
    "originalTitle": "シン・エヴァンゲリオン劇場版𝄇",
    "kind": "动漫电影",
    "year": 2021,
    "score": "8.6",
    "genre": "Award Winning",
    "poster": "https://cdn.myanimelist.net/images/anime/1422/113533l.jpg",
    "hot": 12173,
    "summary": "Evangelion: 3.0+1.0 Thrice Upon a Time是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-065",
    "title": "Mushi-Shi: The Next Chapter - Drops of Bells",
    "originalTitle": "蟲師 続章: 鈴の雫",
    "kind": "动漫电影",
    "year": 2015,
    "score": "8.6",
    "genre": "Adventure",
    "poster": "https://cdn.myanimelist.net/images/anime/9/72689l.jpg",
    "hot": 12144,
    "summary": "Mushi-Shi: The Next Chapter - Drops of Bells是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-066",
    "title": "Neon Genesis Evangelion: The End of Evangelion",
    "originalTitle": "新世紀エヴァンゲリオン劇場版 Air / まごころを, 君に",
    "kind": "动漫电影",
    "year": 1997,
    "score": "8.6",
    "genre": "Avant Garde",
    "poster": "https://cdn.myanimelist.net/images/anime/1404/98182l.jpg",
    "hot": 12115,
    "summary": "Neon Genesis Evangelion: The End of Evangelion是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-067",
    "title": "Kizumonogatari Part 2: Hot-Blooded",
    "originalTitle": "傷物語〈Ⅱ熱血篇〉",
    "kind": "动漫电影",
    "year": 2016,
    "score": "8.6",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1981/112812l.jpg",
    "hot": 12086,
    "summary": "Kizumonogatari Part 2: Hot-Blooded是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-068",
    "title": "Perfect Blue",
    "originalTitle": "パーフェクトブルー",
    "kind": "动漫电影",
    "year": 1998,
    "score": "8.6",
    "genre": "Avant Garde",
    "poster": "https://cdn.myanimelist.net/images/anime/1254/134212l.jpg",
    "hot": 12057,
    "summary": "Perfect Blue是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-069",
    "title": "I Want To Eat Your Pancreas",
    "originalTitle": "君の膵臓をたべたい",
    "kind": "动漫电影",
    "year": 2018,
    "score": "8.6",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/1768/93291l.jpg",
    "hot": 12028,
    "summary": "I Want To Eat Your Pancreas是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-070",
    "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
    "originalTitle": "劇場版 鬼滅の刃 無限列車編",
    "kind": "动漫电影",
    "year": 2020,
    "score": "8.5",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1704/106947l.jpg",
    "hot": 11999,
    "summary": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-071",
    "title": "Gintama: The Movie",
    "originalTitle": "劇場版 銀魂 新訳紅桜篇",
    "kind": "动漫电影",
    "year": 2010,
    "score": "8.5",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/4/28803l.jpg",
    "hot": 11970,
    "summary": "Gintama: The Movie是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-072",
    "title": "Revue Starlight: The Movie",
    "originalTitle": "劇場版 少女☆歌劇 レヴュースタァライト",
    "kind": "动漫电影",
    "year": 2021,
    "score": "8.5",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/1378/119190l.jpg",
    "hot": 11941,
    "summary": "Revue Starlight: The Movie是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-073",
    "title": "Puella Magi Madoka Magica the Movie: Rebellion",
    "originalTitle": "劇場版 魔法少女まどか☆マギカ 叛逆の物語",
    "kind": "动漫电影",
    "year": 2013,
    "score": "8.5",
    "genre": "Award Winning",
    "poster": "https://cdn.myanimelist.net/images/anime/5/54231l.jpg",
    "hot": 11912,
    "summary": "Puella Magi Madoka Magica the Movie: Rebellion是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-074",
    "title": "given The Movie: To the Sea",
    "originalTitle": "映画 ギヴン 海へ",
    "kind": "动漫电影",
    "year": 2024,
    "score": "8.5",
    "genre": "Boys Love",
    "poster": "https://cdn.myanimelist.net/images/anime/1663/144261l.jpg",
    "hot": 11883,
    "summary": "given The Movie: To the Sea是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-075",
    "title": "The Garden of Sinners Chapter 5: Paradox Spiral",
    "originalTitle": "劇場版 空の境界 the Garden of sinners 第五章『矛盾螺旋』",
    "kind": "动漫电影",
    "year": 2008,
    "score": "8.5",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/4/75851l.jpg",
    "hot": 11854,
    "summary": "The Garden of Sinners Chapter 5: Paradox Spiral是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-076",
    "title": "Ne Zha 2",
    "originalTitle": "哪吒之魔童闹海",
    "kind": "动漫电影",
    "year": 2025,
    "score": "8.5",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1616/147002l.jpg",
    "hot": 11825,
    "summary": "Ne Zha 2是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-077",
    "title": "Fate/stay night: Heaven's Feel - II. Lost Butterfly",
    "originalTitle": "劇場版「Fate/stay night [Heaven's Feel] II.lost butterfly」",
    "kind": "动漫电影",
    "year": 2019,
    "score": "8.5",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1974/98158l.jpg",
    "hot": 11796,
    "summary": "Fate/stay night: Heaven's Feel - II. Lost Butterfly是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-078",
    "title": "Steins;Gate: The Movie - Load Region of Déjà Vu",
    "originalTitle": "劇場版 シュタインズゲート 負荷領域のデジャヴ",
    "kind": "动漫电影",
    "year": 2013,
    "score": "8.4",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/1611/112806l.jpg",
    "hot": 11767,
    "summary": "Steins;Gate: The Movie - Load Region of Déjà Vu是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-079",
    "title": "Violet Evergarden: Eternity and the Auto Memory Doll",
    "originalTitle": "ヴァイオレット・エヴァーガーデン 外伝 -永遠と自動手記人形-",
    "kind": "动漫电影",
    "year": 2019,
    "score": "8.4",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/1667/112943l.jpg",
    "hot": 11738,
    "summary": "Violet Evergarden: Eternity and the Auto Memory Doll是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-080",
    "title": "Natsume's Book of Friends Movie: Ephemeral Bond",
    "originalTitle": "劇場版 夏目友人帳 ～うつせみに結ぶ～",
    "kind": "动漫电影",
    "year": 2018,
    "score": "8.4",
    "genre": "Slice of Life",
    "poster": "https://cdn.myanimelist.net/images/anime/1250/94846l.jpg",
    "hot": 11709,
    "summary": "Natsume's Book of Friends Movie: Ephemeral Bond是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-081",
    "title": "Saekano the Movie: Finale",
    "originalTitle": "冴えない彼女の育てかた Fine",
    "kind": "动漫电影",
    "year": 2019,
    "score": "8.4",
    "genre": "Comedy",
    "poster": "https://cdn.myanimelist.net/images/anime/1671/111411l.jpg",
    "hot": 11680,
    "summary": "Saekano the Movie: Finale是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-082",
    "title": "Gintama: Yorinuki Gintama-san on Theater 2D",
    "originalTitle": "銀魂 よりぬき銀魂さんオンシアター2D",
    "kind": "动漫电影",
    "year": 2012,
    "score": "8.4",
    "genre": "Action",
    "poster": "https://cdn.myanimelist.net/images/anime/1172/90571l.jpg",
    "hot": 11651,
    "summary": "Gintama: Yorinuki Gintama-san on Theater 2D是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-083",
    "title": "Maquia: When the Promised Flower Blooms",
    "originalTitle": "さよならの朝に約束の花をかざろう",
    "kind": "动漫电影",
    "year": 2018,
    "score": "8.4",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/11/89556l.jpg",
    "hot": 11622,
    "summary": "Maquia: When the Promised Flower Blooms是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-084",
    "title": "Teasing Master Takagi-san: The Movie",
    "originalTitle": "からかい上手の高木さん",
    "kind": "动漫电影",
    "year": 2022,
    "score": "8.4",
    "genre": "Romance",
    "poster": "https://cdn.myanimelist.net/images/anime/1376/123398l.jpg",
    "hot": 11593,
    "summary": "Teasing Master Takagi-san: The Movie是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-085",
    "title": "Blue Giant",
    "originalTitle": "BLUE GIANT",
    "kind": "动漫电影",
    "year": 2023,
    "score": "8.4",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/1958/132159l.jpg",
    "hot": 11564,
    "summary": "Blue Giant是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-086",
    "title": "KonoSuba: God's Blessing on This Wonderful World! - Legend of Crimson",
    "originalTitle": "映画 この素晴らしい世界に祝福を！紅伝説",
    "kind": "动漫电影",
    "year": 2019,
    "score": "8.4",
    "genre": "Adventure",
    "poster": "https://cdn.myanimelist.net/images/anime/1638/119321l.jpg",
    "hot": 11535,
    "summary": "KonoSuba: God's Blessing on This Wonderful World! - Legend of Crimson是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-087",
    "title": "Made in Abyss: Wandering Twilight",
    "originalTitle": "劇場版総集編【後編】メイドインアビス 放浪する黄昏",
    "kind": "动漫电影",
    "year": 2019,
    "score": "8.4",
    "genre": "Adventure",
    "poster": "https://cdn.myanimelist.net/images/anime/1336/95168l.jpg",
    "hot": 11506,
    "summary": "Made in Abyss: Wandering Twilight是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-088",
    "title": "Girls und Panzer das Finale – Part 4",
    "originalTitle": "『ガールズ＆パンツァー 最終章』第4話",
    "kind": "动漫电影",
    "year": 2023,
    "score": "8.4",
    "genre": "动画",
    "poster": "https://cdn.myanimelist.net/images/anime/1652/138188l.jpg",
    "hot": 11477,
    "summary": "Girls und Panzer das Finale – Part 4是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-089",
    "title": "Ramayana: The Legend of Prince Rama",
    "originalTitle": "ラーマーヤナ ラーマ王子伝説",
    "kind": "动漫电影",
    "year": 1993,
    "score": "8.4",
    "genre": "Adventure",
    "poster": "https://cdn.myanimelist.net/images/anime/1070/104671l.jpg",
    "hot": 11448,
    "summary": "Ramayana: The Legend of Prince Rama是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  },
  {
    "id": "jp-090",
    "title": "Puella Magi Madoka Magica the Movie Part 2: Eternal",
    "originalTitle": "劇場版 魔法少女まどか☆マギカ 永遠の物語",
    "kind": "动漫电影",
    "year": 2012,
    "score": "8.4",
    "genre": "Drama",
    "poster": "https://cdn.myanimelist.net/images/anime/6/42265l.jpg",
    "hot": 11419,
    "summary": "Puella Magi Madoka Magica the Movie Part 2: Eternal是日本电影网片库中的动漫电影内容，图片采用与片名对应的正式海报，适合日本电影在线、日本电影官网、日本电影网站和日本电影在线观看用户查找高清观影资料。"
  }
];

function card(item) {
  return `<article class="card">
    <a href="./movie.html?id=${encodeURIComponent(item.id)}">
      <div class="cover"><img src="${item.poster}" alt="${item.title}" loading="lazy"><span>${item.kind}</span></div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.originalTitle}</p>
        <div class="meta"><b>${item.score}</b><span>${item.year}</span><span>${item.genre}</span></div>
      </div>
    </a>
  </article>`;
}

function featureRow(item) {
  return `<a class="feature-row" href="./movie.html?id=${encodeURIComponent(item.id)}">
    <img src="${item.poster}" alt="${item.title}" loading="lazy">
    <span><b>${item.title}</b><small>${item.kind} / ${item.year} / ${item.score} / ${item.genre}</small></span>
  </a>`;
}

function renderHome() {
  const hot = [...items].sort((a, b) => b.hot - a.hot);
  const lead = hot[0];
  document.getElementById("heroFeature").innerHTML = `<a href="./movie.html?id=${lead.id}">
    <img src="${lead.poster}" alt="${lead.title}">
    <span><small>${lead.kind} / ${lead.genre}</small><b>${lead.title}</b></span>
  </a>`;
  document.getElementById("heroQueue").innerHTML = hot.slice(1, 6).map(featureRow).join("");
  document.getElementById("spotlight").innerHTML = hot.filter((item) => item.kind !== "动漫电影").slice(0, 6).map(featureRow).join("");
  document.getElementById("rankList").innerHTML = [...items].sort((a, b) => b.score - a.score).slice(0, 8).map((item) => `<li><a href="./movie.html?id=${item.id}"><b>${item.title}</b><span>${item.score}</span></a></li>`).join("");
  document.getElementById("homeGrid").innerHTML = hot.slice(0, 36).map(card).join("");
}

function filteredItems() {
  const kind = params.get("kind") || "全部";
  const genre = params.get("genre");
  const sort = params.get("sort") || document.getElementById("sortSelect")?.value || "hot";
  let list = [...items];
  if (kind !== "全部") list = list.filter((item) => item.kind === kind);
  if (genre) list = list.filter((item) => item.genre === genre);
  list.sort((a, b) => sort === "score" ? b.score - a.score : sort === "year" ? b.year - a.year : b.hot - a.hot);
  return { list, kind };
}

function renderLibrary() {
  document.querySelectorAll("[data-kind]").forEach((button) => {
    button.onclick = () => {
      const value = button.dataset.kind;
      location.href = value === "全部" ? "./library.html" : `./library.html?kind=${encodeURIComponent(value)}`;
    };
  });

  const sortSelect = document.getElementById("sortSelect");
  sortSelect.value = params.get("sort") || "hot";
  sortSelect.onchange = () => {
    params.set("sort", sortSelect.value);
    location.href = `./library.html?${params.toString()}`;
  };

  const { list, kind } = filteredItems();
  document.getElementById("libraryTitle").textContent = kind === "全部" ? "全部内容" : `${kind}频道`;
  document.getElementById("resultCount").textContent = `${list.length} 条`;
  document.getElementById("libraryGrid").innerHTML = list.map(card).join("");
}

function renderDetail() {
  const item = items.find((entry) => entry.id === params.get("id")) || items[0];
  applyTdk(fallbackTdk);
  document.getElementById("detailRoot").innerHTML = `
    <div class="detail-cover"><img src="${item.poster}" alt="${item.title}"></div>
    <div class="detail-copy">
      <p class="kicker">${item.kind} / ${item.genre}</p>
      <h1>${item.title}</h1>
      <p class="origin">${item.originalTitle}</p>
      <div class="detail-meta"><span>评分 ${item.score}</span><span>${item.year}</span><span>${item.genre}</span><span>${item.kind}</span></div>
      <p>${item.summary}</p>
      <a class="btn primary" href="./library.html?kind=${encodeURIComponent(item.kind)}">查看同类内容</a>
    </div>`;
  const related = items.filter((entry) => entry.id !== item.id && (entry.kind === item.kind || entry.genre === item.genre)).slice(0, 8);
  document.getElementById("relatedGrid").innerHTML = related.map(card).join("");
}

function render() {
  if (page === "home") renderHome();
  if (page === "library") renderLibrary();
  if (page === "detail") renderDetail();
}

render();
applyTdkFromFile();
