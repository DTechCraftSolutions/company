export function VideoComponent() {
  return (
    <div className="w-[100%] absolute -z-[1000]">
      <video autoPlay muted loop src="/video-company.mp4" />
      <div className="xl:hidden">
        <video autoPlay muted loop src="/video-company.mp4" />
      </div>
    </div>
  );
}
