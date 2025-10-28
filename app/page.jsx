"use client";
import React, { useEffect, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { gsap } from "gsap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  // بيانات تجريبية
  const statsData = [
    { title: "العملاء", value: 120, chartData: [12, 19, 3, 5, 2, 3] },
    { title: "الطلبات", value: 85, chartData: [5, 10, 8, 12, 6, 7] },
    { title: "النمو", value: "15%", chartData: [2, 4, 6, 8, 10, 12] },
    {
      title: "المديونية",
      value: "$1,200",
      chartData: [200, 300, 400, 500, 600, 700],
    },
  ];

  const monthlySales = {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
    datasets: [
      {
        label: "المبيعات",
        data: [500, 700, 400, 900, 750, 1000],
        backgroundColor: "rgba(14, 165, 233, 0.5)",
        borderColor: "rgba(14, 165, 233, 1)",
        borderWidth: 2,
      },
    ],
  };

  const latestCustomers = [
    { name: "أحمد علي", email: "ahmed@example.com" },
    { name: "سارة محمد", email: "sara@example.com" },
    { name: "خالد حسن", email: "khaled@example.com" },
    { name: "منى سمير", email: "mona@example.com" },
  ];

  const todaysDeliveries = [
    { item: "قميص", date: "28-10-2025", status: "جاهز", tailor: "خياط 1" },
    {
      item: "بنطال",
      date: "28-10-2025",
      status: "قيد التنفيذ",
      tailor: "خياط 2",
    },
    { item: "جاكيت", date: "28-10-2025", status: "جاهز", tailor: "خياط 3" },
  ];

  const statsRefs = useRef([]);
  const monthlyRef = useRef(null);
  const latestRef = useRef(null);
  const deliveriesRef = useRef(null);

  useEffect(() => {
    // أنميشن للبوكسات
    statsRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: i * 0.15, duration: 0.6, ease: "power2.out" }
      );
    });

    gsap.fromTo(
      monthlyRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.7, duration: 0.6, ease: "power2.out" }
    );
    gsap.fromTo(
      latestRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.9, duration: 0.6, ease: "power2.out" }
    );
    gsap.fromTo(
      deliveriesRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 1.1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen p-6 ">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        مرحبا بك في لوحة التحكم
      </h1>

      {/* 4 بوكسات جريد */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            ref={(el) => (statsRefs.current[idx] = el)}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-900">
                {stat.title}
              </h2>
              <span className="text-xl font-bold text-blue-900">
                {stat.value}
              </span>
            </div>
            <div className="h-20">
              <Line
                data={{
                  labels: ["1", "2", "3", "4", "5", "6"],
                  datasets: [
                    {
                      data: stat.chartData,
                      borderColor: "rgba(14, 165, 233, 1)",
                      backgroundColor: "rgba(14, 165, 233, 0.3)",
                      tension: 0.4,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: { x: { display: false }, y: { display: false } },
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* مبيعات حسب الشهر */}
      <div
        ref={monthlyRef}
        className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition-shadow duration-300"
      >
        <h2 className="text-lg font-semibold mb-4 text-blue-900">
          مبيعات حسب الشهر
        </h2>
        <Bar
          data={monthlySales}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </div>

      {/* أحدث العملاء */}
      <div
        ref={latestRef}
        className="bg-[#e6f0ff] p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition-shadow duration-300"
      >
        <h2 className="text-lg font-semibold mb-4 text-blue-900">
          أحدث العملاء
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestCustomers.map((customer, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-semibold text-blue-900">{customer.name}</h3>
              <p className="text-sm text-blue-800">{customer.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* تسليم ثياب اليوم */}
      <div
        ref={deliveriesRef}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h2 className="text-lg font-semibold mb-4 text-blue-900">
          تسليم ثياب اليوم
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-blue-200 rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="px-6 py-3 uppercase tracking-wider text-center">
                  الصنف
                </th>
                <th className="px-6 py-3 uppercase tracking-wider text-center">
                  تاريخ التسليم
                </th>
                <th className="px-6 py-3 uppercase tracking-wider text-center">
                  الحالة
                </th>
                <th className="px-6 py-3 uppercase tracking-wider text-center">
                  الخياط
                </th>
              </tr>
            </thead>
            <tbody>
              {todaysDeliveries.map((delivery, idx) => (
                <tr
                  key={idx}
                  className={`transition-all duration-300 cursor-pointer ${
                    idx % 2 === 0 ? "bg-blue-50" : "bg-[#f0f7ff]"
                  } hover:bg-blue-200 hover:shadow-md`}
                >
                  <td className="px-6 py-3 border-b border-blue-200 text-blue-900 text-center">
                    {delivery.item}
                  </td>
                  <td className="px-6 py-3 border-b border-blue-200 text-blue-900 text-center">
                    {delivery.date}
                  </td>
                  <td
                    className={`px-6 py-3 border-b border-blue-200 text-center font-semibold `}
                  >
                    <span
                      className={`
    px-3 py-1 text-sm font-semibold rounded-full transition-all duration-300
    ${
      delivery.status === "جاهز"
        ? "bg-green-100 text-green-800 hover:bg-green-200"
        : delivery.status === "قيد التنفيذ"
        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
        : delivery.status === "متأخر"
        ? "bg-red-100 text-red-800 hover:bg-red-200"
        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
    }
  `}
                    >
                      {delivery.status}
                    </span>
                  </td>

                  <td className="px-6 py-3 border-b border-blue-200 text-blue-900 text-center">
                    {delivery.tailor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
