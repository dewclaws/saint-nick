import { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 139.24 166.183"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Saint Nick Logo</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Logo" fill={props.fill ? props.fill : 'currentColor'}>
          <path
            d="M124.32,121.405 C120.87,121.405 117.56,120.035 115.12,117.596 L64.77,67.245 L48.53,51.032 C42.88,45.397 39.76,37.892 39.75,29.897 C39.75,21.91 42.86,14.401 48.5,8.752 C54.15,3.109 61.66,0 69.63,0 C77.61,0 85.12,3.108 90.76,8.752 L105.87,23.849 L96.04,33.675 L80.94,18.572 C77.93,15.557 73.91,13.898 69.64,13.898 C65.36,13.898 61.34,15.557 58.33,18.571 C55.31,21.598 53.64,25.615 53.64,29.886 C53.64,34.156 55.31,38.174 58.34,41.2 L73.46,56.294 C74.21,57.046 74.97,57.799 75.72,58.551 L124.68,107.514 L125.35,107.514 L125.35,51.523 L139.24,51.523 L139.24,121.405 L124.32,121.405"
            id="Fill-18"
          ></path>
          <path
            d="M69.61,166.183 C61.62,166.183 54.11,163.08 48.48,157.445 L33.38,142.347 L43.2,132.521 L58.3,147.624 C61.31,150.639 65.33,152.299 69.61,152.299 C73.88,152.299 77.9,150.639 80.91,147.625 C83.93,144.598 85.6,140.58 85.6,136.31 C85.6,132.041 83.93,128.023 80.9,124.996 L65.78,109.903 C65.03,109.151 64.27,108.398 63.52,107.646 L14.56,58.682 L13.89,58.682 L13.89,114.674 L0,114.674 L0,44.791 L14.93,44.791 C18.37,44.791 21.68,46.161 24.12,48.6 L74.47,98.951 L90.26,114.712 C95.75,120.185 99.19,127.479 99.47,135.222 C99.77,143.61 96.64,151.543 90.74,157.445 C85.09,163.079 77.59,166.183 69.61,166.183"
            id="Fill-19"
          ></path>
        </g>
      </g>
    </svg>
  );
}
