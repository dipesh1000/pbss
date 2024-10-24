export async function fetchPosts() {
  let res = await fetch(
    `http://localhost:8888/pbss/wp-json/wp/v2/posts?_fields=id,title,excerpt,featured_media&categories=2&per_page=10`,
    { cache: 'no-store' }
  );
  let items = await res.json();
  // const itemsWithThumbnails = await Promise.all(
  //   items?.map(async (item) => {
  //     let thumbnailRes = await fetch(
  //       `http://localhost:8888/pbss/wp-json/wp/v2/media/${item?.featured_media}`
  //     );

  //     const { source_url } = await thumbnailRes.json();

  //     return { ...item, attachement: source_url };
  //   })
  // );

  return items;
}

// export async function getAttachment(attrId) {
//   let res = await fetch(
//     `http://localhost:8888/pbss/wp-json/wp/v2/media/${attrId}`
//   );
//   return res.json();
// }
