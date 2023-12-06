export async function GET(request: Request) {
  const res = {
    Hello: "World!",
  };

  return Response.json(res, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
