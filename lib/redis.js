import Redis from "ioredis";

const redis = new Redis();

const initialData = {
  1702459181837:
    '{"title":"标题1","content":"内容1","updateTime":"2023-12-13T09:19:48.837Z"}',
  1702459182837:
    '{"title":"标题2","content":"内容2","updateTime":"2023-12-13T09:19:48.837Z"}',
  1702459188837:
    '{"title":"标题3","content":"内容3","updateTime":"2023-12-13T09:19:48.837Z"}',
};

// 获取所有笔记的 getAllNotes，这里我们做了一个特殊处理，如果为空，就插入 3 条事先定义的笔记数据
export async function getAllNotes() {
  const data = await redis.hgetall("notes");
  console.log("🚀 ~ getAllNotes ~ data:", data);
  if (Object.keys(data).length == 0) {
    await redis.hset("notes", initialData);
  }
  return await redis.hgetall("notes");
}

// 添加笔记的 addNote
export async function addNote(data) {
  const uuid = Date.now().toString();
  await redis.hset("notes", [uuid], data);
  return uuid;
}

// 更新笔记的 updateNote
export async function updateNote(uuid, data) {
  await redis.hset("notes", [uuid], data);
}

// 获取笔记的 getNote
export async function getNote(uuid) {
  return JSON.parse(await redis.hget("notes", uuid));
}

// 删除笔记的 delNote
export async function delNote(uuid) {
  return redis.hdel("notes", uuid);
}

export default redis;
