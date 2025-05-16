const BlueSphere = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M128 1c70.692 0 128 56.308 128 127 0 70.692-57.308 128-128 128C57.308 256 0 198.692 0 128 0 57.308 57.308 1 128 1Z"
      style={{
        fill: "#0bdefe",
      }}
    />
    <ellipse
      cx={128}
      cy={132}
      rx={128}
      ry={108}
      style={{
        fill: "#2ed8ec",
      }}
    />
    <ellipse
      cx={128}
      cy={114}
      rx={126}
      ry={97}
      style={{
        fill: "#2ee1ec",
      }}
    />
    <path
      fillRule="evenodd"
      d="M247 92c0 44.183-53.278 80-119 80C62.278 172 9 136.183 9 92c0-5.921.985-11.869 2.801-17.734C21.95 52.355 38.111 33.801 58.17 20.717 77.786 9.24 101.904 2 128 2c26.096 0 50.213 7.24 69.829 18.717 20.06 13.084 36.221 31.638 46.37 53.549C246.014 80.131 247 86.079 247 92Z"
      style={{
        fill: "#2bebf1",
      }}
    />
    <path
      fillRule="evenodd"
      d="M128 129c-55.229 0-100-28.654-100-64 0-9.403 3.194-18.536 8.885-26.889C60.095 14.586 92.342 0 128 0c35.658 0 67.905 14.586 91.115 38.111C224.806 46.464 228 55.597 228 65c0 35.346-44.772 64-100 64Z"
      style={{
        fill: "#50eff5",
      }}
    />
    <ellipse
      cx={128}
      cy={48}
      rx={74}
      ry={47}
      style={{
        fill: "#4ef4fa",
      }}
    />
    <ellipse
      cx={128}
      cy={29}
      rx={46}
      ry={29}
      style={{
        fill: "#82f4f8",
      }}
    />
  </svg>
);
export default BlueSphere;
