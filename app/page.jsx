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
  const statsData = [
    { title: "العملاء", value: 120, chartData: [12, 19, 3, 5, 2, 3] },
    { title: "الطلبات", value: 85, chartData: [5, 10, 8, 12, 6, 7] },
    { title: "النمو", value: "15%", chartData: [2, 4, 6, 8, 10, 12] },
    {
      title: "المديونية",
      value: "$1,200",
      chartData: [200, 300, 400, 500, 600, 700],
    },
    {
      title: "المالية",
      value: "$5,000",
      chartData: [500, 700, 400, 900, 750, 1000],
    },
    {
      title: "المدفوعات",
      value: "$3,200",
      chartData: [300, 500, 350, 600, 450, 700],
    },
  ];

  const monthlySales = {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
    datasets: [
      {
        label: "المبيعات",
        data: [500, 700, 400, 900, 750, 1000],
        backgroundColor: "rgba(14,165,233,0.5)",
        borderColor: "rgba(14,165,233,1)",
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
    statsRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: i * 0.15, duration: 0.6 }
      );
    });
    gsap.fromTo(
      monthlyRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.7, duration: 0.6 }
    );
    gsap.fromTo(
      latestRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.9, duration: 0.6 }
    );
    gsap.fromTo(
      deliveriesRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 1.1, duration: 0.6 }
    );
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-8 text-[var(--color-primary)] text-center md:text-start">
        مرحبا بك في لوحة التحكم
      </h1>

      {/* البوكسات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            ref={(el) => (statsRefs.current[idx] = el)}
            className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
              <div className="text-center sm:text-start w-full sm:w-auto">
                <h2 className="text-lg font-bold mb-2 text-[var(--color-primary)]">
                  {stat.title}
                </h2>
                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                  {stat.value}
                </span>
              </div>
              <div className="h-20 w-full sm:w-auto">
                {stat.title === "العملاء" || stat.title === "النمو" ? (
                  <Line
                    data={{
                      labels: ["1", "2", "3", "4", "5", "6"],
                      datasets: [
                        {
                          data: stat.chartData,
                          borderColor: "#727efd",
                          backgroundColor: "rgba(114,126,253,0.3)",
                          tension: 0.4,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: { x: { display: false }, y: { display: false } },
                    }}
                  />
                ) : (
                  <Bar
                    data={{
                      labels: ["1", "2", "3", "4", "5", "6"],
                      datasets: [
                        {
                          data: stat.chartData,
                          backgroundColor: "rgba(14,165,233,0.5)",
                          borderColor: "rgba(14,165,233,1)",
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: { x: { display: false }, y: { display: false } },
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        {/* مبيعات حسب الشهر */}
        <div
          ref={monthlyRef}
          className="bg-white col-span-1 md:col-span-2  p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-lg mb-4 text-[var(--color-primary)] font-bold text-center md:text-start">
            مبيعات حسب الشهر
          </h2>
          <div className="h-64 sm:h-80">
            <Bar
              data={monthlySales}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* أحدث العملاء */}
        <div
          ref={latestRef}
          className="bg-white col-span-1 md:col-span-1 lg:col-span-1 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-lg mb-4 text-[var(--color-primary)] font-bold text-center md:text-start">
            أحدث العملاء
          </h2>
          <div className="flex flex-col gap-4">
            {latestCustomers.map((customer, idx) => (
              <div
                key={idx}
                className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center sm:text-start"
              >
                <h3 className="font-semibold text-[var(--color-primary)]">
                  {customer.name}
                </h3>
                <p className="text-sm text-blue-800 break-words">
                  {customer.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* تسليم ثياب اليوم */}
      <div
        ref={deliveriesRef}
        className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h2 className="text-lg font-bold mb-4 text-[var(--color-primary)] text-center md:text-start">
          تسليم ثياب اليوم
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-md overflow-hidden text-sm sm:text-base">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-center">الصنف</th>
                <th className="px-4 py-3 text-center">تاريخ التسليم</th>
                <th className="px-4 py-3 text-center">الحالة</th>
                <th className="px-4 py-3 text-center">الخياط</th>
              </tr>
            </thead>
            <tbody>
              {todaysDeliveries.map((delivery, idx) => (
                <tr
                  key={idx}
                  className={`transition-all duration-300 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-[#f0f7ff]"
                  } hover:bg-gray-200`}
                >
                  <td className="px-4 py-3 border-b border-gray-200 text-center text-gray-600">
                    {delivery.item}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center text-gray-600">
                    {delivery.date}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        delivery.status === "جاهز"
                          ? "bg-green-100 text-green-800"
                          : delivery.status === "قيد التنفيذ"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center text-gray-600">
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
