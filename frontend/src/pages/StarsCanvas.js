// StarsCanvas.js
import React, { useEffect, useRef } from "react";

export default function StarsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const shootingStars = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        color: ["#fff", "#ffd", "#ddf", "#ccf"][Math.floor(Math.random() * 4)],
        twinkle: Math.random() * 100,
      });
    }

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 80 + 100,
        speed: Math.random() * 6 + 4,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    function animate() {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star, i) => {
        star.twinkle += 0.05;
        const opacity = 0.5 + Math.sin(star.twinkle) * 0.5;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.floor(opacity * 255).toString(16)}`;
        ctx.fill();
      });

      // Shooting stars
      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];
        ctx.strokeStyle = "white";
        ctx.lineWidth = s.size;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length, s.y + s.length * 0.3);
        ctx.stroke();

        s.x += s.speed;
        s.y += s.speed * 0.3;

        if (s.x > canvas.width || s.y > canvas.height) {
          shootingStars.splice(i, 1);
          i--;
        }
      }

      if (Math.random() < 0.01) {
        createShootingStar();
      }

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
