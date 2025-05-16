const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#f39c12" d="m12-.012 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z" />
    <g fill="#f1c40f">
      <path d="M12 0v13l4-4zM12 13l12-3-6 5zM12 13l8 11-8-5zM12 13 4 24l2-9zM12 13 0 10l8-1z" />
    </g>
  </svg>
);
export default SvgComponent;
