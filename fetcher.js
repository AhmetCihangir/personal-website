export const fetcher = async (...args) => {
    const res = await fetch(...args);
  
    return res.json();
  };

export const fetcherPost = async (...args) => {
  const res = await fetch(...args, { method : "POST" });
  
  return res.json();
};

  