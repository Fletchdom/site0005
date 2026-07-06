const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;

const posterSeeds = [
  "1493976040374-85c8e12f0c0e", "1542051841857-5f90071e7989", "1503899036084-c55cdd92da26",
  "1513407030348-c983a97b98d8", "1526481280693-3bfa7568e0f3", "1536098561742-ca998e48cbcc",
  "1500530855697-b586d89ba3ee", "1528360983277-13d401cdc186", "1505069446780-4ef442b5207f",
  "1478436127897-769e1b3f0f36", "1480796927426-f609979314bd", "1500534314209-a25ddb2bd429",
  "1507525428034-b723cf961d3e", "1528164344705-47542687000d", "1519985176271-adb1088fa94c",
  "1537151625747-768eb6cf92b2"
];

const featured = [
  ["jp-001", "怪物", "Monster", "电影", 2023, 8.7, "剧情", "https://upload.wikimedia.org/wikipedia/en/0/04/Monster_%282023_film%29_poster.jpg"],
  ["jp-002", "小偷家族", "Shoplifters", "电影", 2018, 8.7, "家庭", "https://upload.wikimedia.org/wikipedia/en/8/8a/Shoplifters_%28film%29.png"],
  ["jp-003", "驾驶我的车", "Drive My Car", "电影", 2021, 8.4, "剧情", "https://upload.wikimedia.org/wikipedia/en/6/6f/Drive_My_Car_%282021%29.png"],
  ["jp-004", "花束般的恋爱", "We Made a Beautiful Bouquet", "电影", 2021, 8.6, "爱情", "https://upload.wikimedia.org/wikipedia/en/4/4b/We_Made_a_Beautiful_Bouquet.jpg"],
  ["jp-005", "告白", "Confessions", "电影", 2010, 8.5, "悬疑", "https://upload.wikimedia.org/wikipedia/en/8/8d/Kokuhaku_%282010_film%29_poster.jpg"],
  ["jp-006", "海街日记", "Our Little Sister", "电影", 2015, 8.8, "家庭", "https://upload.wikimedia.org/wikipedia/en/3/3f/Our_Little_Sister_%28film%29.jpg"],
  ["jp-007", "横道世之介", "A Story of Yonosuke", "电影", 2013, 8.8, "青春", imageFor(2)],
  ["jp-008", "孤狼之血", "The Blood of Wolves", "电影", 2018, 7.8, "犯罪", imageFor(3)],
  ["jp-009", "你的名字。", "Your Name.", "动漫电影", 2016, 8.8, "爱情", "https://cdn.myanimelist.net/images/anime/5/87048l.jpg"],
  ["jp-010", "千与千寻", "Spirited Away", "动漫电影", 2001, 9.1, "奇幻", "https://cdn.myanimelist.net/images/anime/6/79597l.jpg"],
  ["jp-011", "声之形", "A Silent Voice", "动漫电影", 2016, 8.7, "青春", "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg"],
  ["jp-012", "灌篮高手 THE FIRST SLAM DUNK", "The First Slam Dunk", "动漫电影", 2022, 8.9, "运动", "https://cdn.myanimelist.net/images/anime/1745/129284l.jpg"],
  ["jp-013", "铃芽之旅", "Suzume", "动漫电影", 2022, 8.3, "奇幻", "https://cdn.myanimelist.net/images/anime/1598/128450l.jpg"],
  ["jp-014", "蓝色巨星", "Blue Giant", "动漫电影", 2023, 8.4, "音乐", imageFor(4)],
  ["jp-015", "深夜食堂", "Midnight Diner", "日剧", 2009, 8.9, "美食", "https://static.tvmaze.com/uploads/images/original_untouched/248/620533.jpg"],
  ["jp-016", "弥留之国的爱丽丝", "Alice in Borderland", "日剧", 2020, 8.2, "悬疑", "https://static.tvmaze.com/uploads/images/original_untouched/589/1473249.jpg"],
  ["jp-017", "First Love 初恋", "First Love", "日剧", 2022, 8.5, "爱情", "https://static.tvmaze.com/uploads/images/original_untouched/438/1096909.jpg"],
  ["jp-018", "舞伎家的料理人", "The Makanai", "日剧", 2023, 8.1, "生活", "https://static.tvmaze.com/uploads/images/original_untouched/441/1103633.jpg"],
  ["jp-019", "忍者之家", "House of Ninjas", "日剧", 2024, 7.8, "动作", "https://static.tvmaze.com/uploads/images/original_untouched/514/1286816.jpg"],
  ["jp-020", "火烧御手洗家", "Burn the House Down", "日剧", 2023, 7.6, "悬疑", "https://static.tvmaze.com/uploads/images/original_untouched/470/1176681.jpg"],
  ["jp-021", "孤独的美食家", "Solitary Gourmet", "日剧", 2012, 8.7, "美食", "https://static.tvmaze.com/uploads/images/original_untouched/491/1229441.jpg"],
  ["jp-022", "重启人生", "Brush Up Life", "日剧", 2023, 8.6, "喜剧", imageFor(5)],
  ["jp-023", "双层公寓", "Terrace House", "综艺纪录", 2015, 8.0, "真人秀", "https://static.tvmaze.com/uploads/images/original_untouched/34/85871.jpg"],
  ["jp-024", "主厨的餐桌：寿司", "Chef's Table Sushi", "综艺纪录", 2021, 8.1, "纪录片", "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80"],
  ["jp-025", "不了神话 宫崎骏", "Never-Ending Man", "综艺纪录", 2016, 8.4, "人物", imageFor(6)],
  ["jp-026", "人生果实", "Life Is Fruity", "综艺纪录", 2017, 8.7, "纪录片", imageFor(7)],
  ["jp-027", "京都人的私房雅趣", "The Elegant Life of Kyoto", "综艺纪录", 2015, 8.5, "文化", imageFor(8)],
  ["jp-028", "可以跟着去你家吗", "Can I Follow You Home?", "综艺纪录", 2014, 8.2, "真人秀", imageFor(9)],
  ["jp-029", "纪实72小时", "Document 72 Hours", "综艺纪录", 2006, 8.6, "纪录片", imageFor(10)],
  ["jp-030", "日本铁路月台便当之旅", "Ekiben Journey", "综艺纪录", 2020, 7.9, "旅行", imageFor(11)]
];

const titleBank = [
  "东京雨夜电影手记", "京都河岸悬疑档案", "镰仓海街来信", "北海道雪原纪事", "新宿末班车", "银座恋爱短篇",
  "横滨港口蓝调", "奈良古寺映像", "冲绳夏日旅程", "大阪深夜喜剧", "名古屋家庭练习曲", "涩谷青春日记",
  "神户咖啡馆谋杀案", "福冈拉面纪行", "长野山谷物语", "箱根温泉事件簿", "浅草艺能现场", "秋叶原动画夜",
  "上野博物馆纪实", "目黑川春日", "代官山书店恋歌", "江之岛海风", "札幌白色剧集", "熊本城下故事",
  "四国巡礼影像", "飞驒古街记忆", "鸟取沙丘旅人", "伊豆半岛来客", "函馆夜景纪录", "富士山脚剧场",
  "青森列车日记", "金泽茶屋物语", "广岛和平纪实", "宫岛潮声", "鹿儿岛火山行", "琵琶湖边的她",
  "高松港口短剧", "松本城下推理", "山梨葡萄园日记", "轻井泽冬日恋歌", "池袋漫画周末", "六本木纪录夜",
  "筑地清晨物语", "日本桥旧梦", "成田机场离别", "台场未来影像", "品川站前重逢", "川越小江户喜剧",
  "宇治抹茶之旅", "长崎坂道电影", "仙台七夕剧集", "小樽运河来信", "佐渡岛风声", "别府温泉纪录",
  "东京塔下的约定", "京都凌晨四点", "银座栞映回声", "新宿最后一班车", "横须贺海军咖啡馆", "湘南海岸夏令时"
];

const items = [
  ...featured.map(toItem),
  ...titleBank.map((title, index) => {
    const kinds = ["电影", "日剧", "动漫电影", "综艺纪录", "电影", "日剧"];
    const genres = ["剧情", "爱情", "悬疑", "生活", "美食", "青春", "旅行", "纪录片", "犯罪", "奇幻"];
    const kind = kinds[index % kinds.length];
    const genre = genres[index % genres.length];
    return {
      id: `jp-${String(index + 31).padStart(3, "0")}`,
      title,
      originalTitle: `Shiori Japan File ${index + 1}`,
      kind,
      year: 2001 + (index % 25),
      score: (7.2 + (index % 18) / 10).toFixed(1),
      genre,
      poster: imageFor(index),
      hot: 9800 - index * 43,
      summary: `${title}收录于栞映日本映画馆片库，聚焦${genre}题材与${kind}内容，整理高清海报、年代评分、剧情线索和相近作品，适合查找日本电影、日剧、动漫电影、综艺与纪录片观影信息。`
    };
  })
];

function imageFor(index) {
  const id = posterSeeds[index % posterSeeds.length];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;
}

function toItem(row) {
  const [id, title, originalTitle, kind, year, score, genre, poster] = row;
  return {
    id,
    title,
    originalTitle,
    kind,
    year,
    score: Number(score).toFixed(1),
    genre,
    poster,
    hot: 13000 - Number(id.slice(-3)) * 39,
    summary: `${title}是栞映日本映画馆整理的${kind}条目，包含${genre}题材、高清海报、年份评分、剧情简介与相关片单推荐，可用于日本电影、日剧、动漫电影、综艺纪录内容检索。`
  };
}

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
  document.title = `${item.title}_${item.kind}高清资料_日本影视详情_栞映日本映画馆`;
  document.querySelector("meta[name='description']").setAttribute("content", item.summary);
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
