import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <main>
      <nav className=" flex items-center justify-center max-w-screen-lg mx-auto max-sm:hidden">
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center hover:bg-[#D9D9D9] p-4 duration-500 w-[120px] md:w-[170px]"
        >
          <div className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
            {" "}
            <svg
              width="full"
              height="full"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.2522 10.6938L11.6605 23.6907V31.3461H18.9064V26.1953L49.087 14.7689L48.2522 10.6938ZM58.3649 26.6206L18.9064 39.7734V34.1815H11.6605V69.1507H21.2849C20.8911 63.7163 22.5766 58.8174 25.4277 54.6274C28.5781 50.0279 33.0674 46.2317 37.8087 43.1758C42.5342 40.1199 47.5118 37.8202 51.6388 36.2607C53.7023 35.4889 55.561 34.8903 57.0732 34.4965C58.6012 34.087 59.7195 33.8664 60.6489 33.8664H69.3124V26.6206H58.3649ZM65.6895 40.0412C65.0594 40.8603 64.2088 41.9787 63.4055 43.2546C61.7673 45.7906 60.4441 48.941 60.6962 50.5162C60.8694 51.6661 61.594 53.0837 62.5706 54.1234C63.5472 55.163 64.7129 55.7773 65.6895 55.7773C66.6504 55.7773 67.816 55.163 68.7926 54.1234C69.7692 53.0837 70.4938 51.6661 70.6671 50.5162C70.9191 48.941 69.596 45.7906 67.9735 43.2546C67.1544 41.9787 66.3196 40.8603 65.6895 40.0412ZM6.61994 71.986V76.7116H28.4363L26.8611 71.986H6.61994Z"
                fill="#404040"
              />
            </svg>
          </div>

          <p className="mt-1 font-center  text-xs sm:text-sm md:text-lg">
            สินค้า{" "}
            <span className="text-red-500 font-center  text-xs sm:text-sm md:text-lg">
              ลดราคา
            </span>
          </p>
        </Link>

        <Link
          href={"/"}
          className="flex flex-col items-center justify-center hover:bg-[#D9D9D9] p-4 duration-500 w-[120px] md:w-[170px]"
        >
          <div className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
            {" "}
            <svg
              width="full"
              height="full"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.6 68.8882C42.7843 68.8882 45.1836 68.8311 47.6501 68.7404C48.5171 68.7068 48.9472 68.69 49.6899 68.6161C60.7053 67.5004 70.0943 57.7485 70.7932 46.7029C70.8436 45.9569 70.8436 45.2915 70.8436 43.9641C70.8436 43.7054 70.8436 43.5743 70.8369 43.4668C70.784 42.6527 70.4366 41.8856 69.8597 41.3087C69.2829 40.7318 68.5158 40.3845 67.7017 40.3315C67.5908 40.3248 67.4664 40.3248 67.2043 40.3248M13.9957 40.3248C13.737 40.3248 13.6093 40.3248 13.4984 40.3315C12.6842 40.3845 11.9172 40.7318 11.3403 41.3087C10.7634 41.8856 10.4161 42.6527 10.3631 43.4668C10.3564 43.5743 10.3564 43.702 10.3564 43.9641C10.3564 45.2915 10.3564 45.9569 10.4034 46.7029C11.0083 56.2599 18.1189 64.849 27.1584 67.7121M20.4376 67.208L17.0772 73.9288M60.7624 67.208L64.1228 73.9288M6.99599 40.3248H47.3208M74.204 40.3248H60.7624"
                stroke="#404040"
                stroke-width="6"
                stroke-linecap="round"
              />
              <path
                d="M7.8361 43.6853C7.8361 44.3537 8.10163 44.9948 8.57428 45.4674C9.04692 45.94 9.68797 46.2056 10.3564 46.2056C11.0248 46.2056 11.6659 45.94 12.1385 45.4674C12.6112 44.9948 12.8767 44.3537 12.8767 43.6853H7.8361ZM21.6003 29.3767L19.2547 30.3008C19.3788 30.6145 19.5646 30.9 19.801 31.1406C20.0375 31.3811 20.3198 31.5717 20.6313 31.7012C20.9428 31.8306 21.2771 31.8962 21.6144 31.894C21.9517 31.8919 22.2852 31.822 22.595 31.6886L21.6003 29.3767ZM41.6283 20.7505L42.6263 23.0692C43.2278 22.8101 43.7048 22.3271 43.9563 21.7225C44.2079 21.1178 44.2141 20.439 43.9739 19.8298L41.6283 20.7505ZM12.8767 43.6853V14.7354H7.8361V43.6853H12.8767ZM18.371 9.24116C20.6191 9.24116 22.6387 10.6088 23.472 12.6957L28.1531 10.8206C27.3715 8.86588 26.0221 7.19356 24.2792 6.01301C22.5362 4.83245 20.4795 4.20116 18.3743 4.20056L18.371 9.24116ZM12.8767 14.7354C12.8767 11.701 15.3365 9.24116 18.371 9.24116L18.3743 4.20056C15.5803 4.20056 12.8974 5.31048 10.9217 7.28615C8.94602 9.26182 7.8361 11.9414 7.8361 14.7354H12.8767ZM23.472 12.6957L24.749 15.8813L29.4267 14.0096L28.1531 10.8206L23.472 12.6957ZM23.9425 28.4526C23.0972 26.2982 23.114 23.901 23.9895 21.7587L19.3186 19.86C17.9552 23.2023 17.9345 26.9413 19.2547 30.3008L23.9425 28.4526ZM40.6336 18.4386L20.6023 27.0614L22.595 31.6886L42.623 23.0659L40.6336 18.4386ZM34.8268 17.0306C36.917 17.9244 38.4729 19.6147 39.2861 21.6746L43.9739 19.8298C43.3329 18.1772 42.3693 16.6655 41.1392 15.3893C39.9092 14.1131 38.4373 13.0946 36.8095 12.3932L34.8268 17.0306ZM23.9895 21.7587C24.7778 19.774 26.2746 18.156 28.1901 17.212L25.9856 12.6822C22.9523 14.1682 20.577 16.7254 19.3186 19.86L23.9895 21.7587ZM28.1901 17.212C29.2178 16.7047 30.3432 16.4261 31.4889 16.3954C32.6346 16.3646 33.7734 16.5791 34.8268 17.0306L36.8095 12.3932C35.0912 11.6585 33.2345 11.307 31.3663 11.3563C29.4982 11.4056 27.6628 11.8579 25.9856 12.6822L28.1901 17.212Z"
                fill="#404040"
              />
            </svg>
          </div>

          <p className="mt-1 font-center  text-xs sm:text-sm md:text-lg">
            สินค้า{" "}
            <span className="text-red-500 font-center  text-xs sm:text-sm md:text-lg">
              ใหม่
            </span>
          </p>
        </Link>

        <Link
          href={"/"}
          className="flex flex-col items-center justify-center hover:bg-[#D9D9D9] p-4 duration-500 w-[120px] md:w-[170px]"
        >
          <div className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
            {" "}
            <svg
              width="full"
              height="full"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_279_11)">
                <path
                  d="M43.2677 14.4017C43.2677 11.3461 42.0539 8.41558 39.8932 6.2549C37.7325 4.09423 34.802 2.88037 31.7463 2.88037C28.6907 2.88037 25.7602 4.09423 23.5995 6.2549C21.4388 8.41558 20.225 11.3461 20.225 14.4017V48.9659M43.2677 25.9231V31.6838M2.9429 48.9659H77.8318V60.4873C77.8318 65.0707 76.0111 69.4665 72.7701 72.7075C69.529 75.9485 65.1333 77.7693 60.5498 77.7693H20.225C15.6415 77.7693 11.2457 75.9485 8.0047 72.7075C4.76369 69.4665 2.9429 65.0707 2.9429 60.4873V48.9659Z"
                  stroke="#404040"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_279_11">
                  <rect
                    width="80.6496"
                    height="80.6496"
                    fill="white"
                    transform="translate(0.062561)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className="mt-1 font-center  text-xs sm:text-sm md:text-lg">
            สินค้า{" "}
            <span className="text-red-500 font-center  text-xs sm:text-sm md:text-lg">
              แนะนำ
            </span>
          </p>
        </Link>

        <Link
          href={"/allproducts"}
          className="flex flex-col items-center justify-center hover:bg-[#D9D9D9] p-4 duration-500 w-[120px] md:w-[170px]"
        >
          <div className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
            {" "}
            <svg
              width="full"
              height="full"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_279_11)">
                <path
                  d="M43.2677 14.4017C43.2677 11.3461 42.0539 8.41558 39.8932 6.2549C37.7325 4.09423 34.802 2.88037 31.7463 2.88037C28.6907 2.88037 25.7602 4.09423 23.5995 6.2549C21.4388 8.41558 20.225 11.3461 20.225 14.4017V48.9659M43.2677 25.9231V31.6838M2.9429 48.9659H77.8318V60.4873C77.8318 65.0707 76.0111 69.4665 72.7701 72.7075C69.529 75.9485 65.1333 77.7693 60.5498 77.7693H20.225C15.6415 77.7693 11.2457 75.9485 8.0047 72.7075C4.76369 69.4665 2.9429 65.0707 2.9429 60.4873V48.9659Z"
                  stroke="#404040"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_279_11">
                  <rect
                    width="80.6496"
                    height="80.6496"
                    fill="white"
                    transform="translate(0.062561)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className="mt-1 font-center  text-xs sm:text-sm md:text-lg">
            สินค้าทั้งหมด
          </p>
        </Link>
      </nav>
    </main>
  );
};

export default Navbar;