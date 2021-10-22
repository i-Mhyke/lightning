export const AboutSection = () => {
  return (
    <div
      id="about"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div className="grid gap-8 row-gap-12 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-7 h-7 text-deep-purple-accent-400"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
                fill="none"
                stroke="currentColor"
              />
              <polyline
                fill="none"
                points="10 11 10 6 6 2 3 5 7 9"
                stroke="currentColor"
              />
              <polyline
                fill="none"
                points="15 12 15 17 19 21 22 18 18 14"
                stroke="currentColor"
              />
              <path d="M8,23a7,7,0,0,1-7-7" fill="none" stroke="currentColor" />
              <path d="M8,19a3,3,0,0,1-3-3" fill="none" stroke="currentColor" />
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Recruiters</h6>
          <p className="mb-3 text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque rem
            aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="text-deep-purple-accent-400 w-7 h-7"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Job Seekers</h6>
          <p className="mb-3 text-sm text-gray-900">
            Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            suscipit leo. Carpe diem vulputate est nec commodo rutrum.
            Pellentesque mattis convallis nisi eu and I ain’t stoppin until the
            swear jar’s full.
          </p>
        </div>
      </div>
    </div>
  );
};
