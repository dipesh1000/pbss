export async function fetchPosts() {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_PROD_URL}/v2/services?_fields=id,title,excerpt,featured_media,acf&categories=2&per_page=10`,
    { cache: 'no-store' }
  );
  let items = await res.json();

  return items;
}

export async function getAttachment(item) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PROD_URL}/v2/media/${item?.featured_media}`
  );
  return await res.json();
}

export async function getServiceDetailsWithId(sid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PROD_URL}/v2/services/${sid}`
  );
  return await res.json();
}

export async function fetchFAQ() {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_PROD_URL}/v2/posts?_fields=id,title,excerpt,featured_media,acf&categories=5&per_page=10`,
    { cache: 'no-store' }
  );
  let items = await res.json();

  return items;
}

export async function fetchHomePageData() {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_PROD_URL}/v2/pages/53?_fields=id,title,excerpt,featured_media,acf`
  );
  let items = await res.json();

  return items;
}

export async function fetchAboutPageData() {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_PROD_URL}/v2/pages/66?_fields=id,title,excerpt,featured_media,acf`
  );
  let items = await res.json();

  return items;
}
