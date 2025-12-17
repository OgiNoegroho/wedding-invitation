import fetch from "node-fetch";

async function main() {
  const res = await fetch("http://localhost:3000/api/rsvps", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Tester",
      attendance: "Yes",
      message: "Hello",
    }),
  });
  const text = await res.text();
  console.log("Status:", res.status);
  console.log("Body:", text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
