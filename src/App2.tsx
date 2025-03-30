import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 font-sans">
      <section className="text-center py-24">
        <h1 className="text-5xl font-extrabold mb-6">
          우리는 미래를 예측하지 않습니다.
          <br />
          우리는 구조를 관찰합니다.
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          시차, 심리, 전이 구조에 기반한 투자 시스템
        </p>
        <a
          href="#philosophy"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg shadow-lg transition"
        >
          철학부터 보기 ↓
        </a>
      </section>

      <section
        id="philosophy"
        className="bg-gray-800 rounded-2xl p-8 my-12 shadow-md max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">📘 바바 철학 선언 요약</h2>
        <p className="text-gray-300 mb-4">
          “GPT는 도구가 아니라 공동 설계자”
        </p>
        <p className="text-gray-400 mb-2">
          구조를 관찰하고 분석하는 과정에서 GPT는 공동 설계자로서 함께 사고하고 인사이트를 발견합니다.
        </p>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © 2025 구조 사고 기반 투자 모델. All rights reserved.
      </footer>
    </div>
  );
}