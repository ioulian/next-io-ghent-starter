export const fetchCount = async (amount = 1): Promise<{ data: number }> => {
  const response = await fetch("/api/counter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  return await response.json();
};
