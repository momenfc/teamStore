export const getProduct = async (id) => {
  const resopnse = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await resopnse.json();
  return resData;
};
