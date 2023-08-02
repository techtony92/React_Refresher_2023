/**
 * * Because this is in it's own separate file, it is now super easy to test.
 *
 */
const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  /**
   * *React Query wants us to return an error if anything goes wrong and the request is unsuccessful.
   * *Fetch will not always through an error, for example if it's an error: 500 internal server error
   *
   * * Note: React Query will try and fetch 3 times.
   *
   * */
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok!`);
  }
  /**
   * * React Query also wants you to return a promise. This is good because
   * * async functions always return a promise. So we don't have to await the fetch
   * * we can just return the json response.
   */

  return apiRes.json();
};

export default fetchPet;
