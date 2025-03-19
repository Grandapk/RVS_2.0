'use client'

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/background-video.mov" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  )
}
