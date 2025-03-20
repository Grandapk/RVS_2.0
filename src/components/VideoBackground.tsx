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
        <source src="/background-video.webm" type="video/webm" />
      </video>
    </div>
  )
}
