import React from "react";

const reviews = [
  {
    name: "John Doe",
    comment:
      "Amazing experience! The gallery truly captures the essence of beauty.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    comment: "Beautiful photos, love the attention to detail!",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    comment: "Highly recommend! The images are stunning and vibrant.",
    rating: 5,
  },
];

function Reviews() {
  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-4xl font-bold text-center text-[#022461] mb-8 font-[family-name:var(--font-rethink)]">
        Reviews
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 font-[family-name:var(--font-rethink)]"
          >
            <p className="text-lg font-semibold">{review.name}</p>
            <p className="text-gray-600 mt-2">{review.comment}</p>
            <div className="flex items-center mt-4">
              {Array.from({ length: review.rating }).map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500 text-xl">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, starIndex) => (
                <span key={starIndex} className="text-gray-300 text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
