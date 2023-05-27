export interface IIconProps {
  variant:
    | "carrito"
    | "casa"
    | "cerrar"
    | "lupa"
    | "flecha-atras"
    | "calendario"
    | "nuevo"
    | "engrane"
    | "bolsa"
    | "mapa"
    | "ojo"
    | "folder"
    | "folder-con-usuario"
    | "etiqueta"
    | "guardar"
    | "circulo-pregunta"
    | "reloj"
    | "comillas"
    | "llamada"
    | "webcam"
    | "maletin"
    | "estudiante"
    | "documento"
    | "salida"
    | "niveles"
    | "certificado"
    | "estrella"
    | "estrella-llena"
    | "facebook"
    | "instagram"
    | "correo"
    | "menu";
  extraClassName?: string;
}

const Icon = ({ variant, extraClassName }: IIconProps) => {
  switch (variant) {
    case "carrito":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4951 28.5806C11.5997 28.5806 12.4951 27.6851 12.4951 26.5806C12.4951 25.476 11.5997 24.5806 10.4951 24.5806C9.39055 24.5806 8.49512 25.476 8.49512 26.5806C8.49512 27.6851 9.39055 28.5806 10.4951 28.5806Z"
            className={`fill-current`}
          />
          <path
            d="M23.4951 28.5806C24.5997 28.5806 25.4951 27.6851 25.4951 26.5806C25.4951 25.476 24.5997 24.5806 23.4951 24.5806C22.3905 24.5806 21.4951 25.476 21.4951 26.5806C21.4951 27.6851 22.3905 28.5806 23.4951 28.5806Z"
            className={`fill-current`}
          />
          <path
            d="M5.78137 8.58057H28.4951L24.9301 20.1693C24.8042 20.5782 24.5505 20.9359 24.2062 21.1899C23.862 21.4439 23.4454 21.5808 23.0176 21.5806H11.0039C10.5692 21.5808 10.1463 21.4393 9.79919 21.1777C9.45208 20.9161 9.19965 20.5485 9.08012 20.1306L4.55887 4.30557C4.49913 4.09671 4.37301 3.91299 4.19958 3.78219C4.02615 3.65138 3.81484 3.58061 3.59762 3.58057H1.49512"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "casa":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 26.8811V20.8811C19 20.6159 18.8946 20.3616 18.7071 20.174C18.5196 19.9865 18.2652 19.8811 18 19.8811H14C13.7348 19.8811 13.4804 19.9865 13.2929 20.174C13.1054 20.3616 13 20.6159 13 20.8811V26.8811C13 27.1463 12.8946 27.4007 12.7071 27.5882C12.5196 27.7758 12.2652 27.8811 12 27.8811H6C5.73478 27.8811 5.48043 27.7758 5.29289 27.5882C5.10536 27.4007 5 27.1463 5 26.8811V15.3186C5.00224 15.1802 5.03215 15.0437 5.08796 14.917C5.14378 14.7904 5.22437 14.6762 5.325 14.5811L15.325 5.49363C15.5093 5.32498 15.7501 5.23145 16 5.23145C16.2499 5.23145 16.4907 5.32498 16.675 5.49363L26.675 14.5811C26.7756 14.6762 26.8562 14.7904 26.912 14.917C26.9679 15.0437 26.9978 15.1802 27 15.3186V26.8811C27 27.1463 26.8946 27.4007 26.7071 27.5882C26.5196 27.7758 26.2652 27.8811 26 27.8811H20C19.7348 27.8811 19.4804 27.7758 19.2929 27.5882C19.1054 27.4007 19 27.1463 19 26.8811Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lupa":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 10.9998C15.75 12.0381 15.4421 13.0532 14.8652 13.9165C14.2884 14.7799 13.4684 15.4528 12.5091 15.8501C11.5498 16.2475 10.4942 16.3515 9.47581 16.1489C8.45741 15.9463 7.52194 15.4463 6.78772 14.7121C6.05349 13.9779 5.55348 13.0424 5.35091 12.024C5.14833 11.0056 5.2523 9.95 5.64966 8.99068C6.04702 8.03137 6.71993 7.21143 7.58329 6.63456C8.44664 6.05768 9.46168 5.74977 10.5 5.74977C11.8924 5.74977 13.2278 6.3029 14.2123 7.28746C15.1969 8.27203 15.75 9.60739 15.75 10.9998ZM21.5307 22.0304C21.461 22.1001 21.3783 22.1554 21.2872 22.1932C21.1962 22.2309 21.0986 22.2504 21 22.2504C20.9015 22.2504 20.8039 22.2309 20.7128 22.1932C20.6218 22.1554 20.5391 22.1001 20.4694 22.0304L15.7763 17.3363C14.1442 18.6941 12.0515 19.3705 9.93346 19.2247C7.81543 19.0789 5.83514 18.1222 4.40449 16.5536C2.97384 14.985 2.20297 12.9252 2.25222 10.8027C2.30148 8.68027 3.16707 6.65849 4.66895 5.15793C6.17083 3.65738 8.19337 2.79358 10.3159 2.7462C12.4384 2.69882 14.4975 3.47151 16.0648 4.90354C17.6322 6.33558 18.5871 8.31672 18.731 10.4349C18.8749 12.553 18.1968 14.6451 16.8375 16.276L21.5307 20.9691C21.6004 21.0388 21.6557 21.1215 21.6934 21.2126C21.7312 21.3036 21.7506 21.4012 21.7506 21.4998C21.7506 21.5983 21.7312 21.6959 21.6934 21.787C21.6557 21.878 21.6004 21.9607 21.5307 22.0304ZM10.5 17.7498C11.8351 17.7498 13.1401 17.3539 14.2501 16.6122C15.3602 15.8705 16.2253 14.8163 16.7362 13.5829C17.2471 12.3495 17.3808 10.9923 17.1203 9.68291C16.8599 8.37354 16.217 7.17081 15.273 6.2268C14.329 5.2828 13.1263 4.63992 11.8169 4.37947C10.5075 4.11902 9.15032 4.25269 7.91692 4.76359C6.68351 5.27448 5.62931 6.13964 4.88761 7.24967C4.14591 8.3597 3.75003 9.66475 3.75003 10.9998C3.75201 12.7894 4.46381 14.5051 5.72925 15.7706C6.99469 17.036 8.71043 17.7478 10.5 17.7498Z"
            className={`fill-current`}
          />
        </svg>
      );
    case "flecha-atras":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_188_10226)">
            <path
              d="M27 16.5H5"
              className={`stroke-current`}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7.5L5 16.5L14 25.5"
              className={`stroke-current`}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "calendario":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 5.88135H6C5.44772 5.88135 5 6.32906 5 6.88135V26.8813C5 27.4336 5.44772 27.8813 6 27.8813H26C26.5523 27.8813 27 27.4336 27 26.8813V6.88135C27 6.32906 26.5523 5.88135 26 5.88135Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 3.88135V7.88135"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 3.88135V7.88135"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 11.8813H27"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "nuevo":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_188_9931)">
            <path
              d="M26 5.88135H6C5.44772 5.88135 5 6.32906 5 6.88135V26.8813C5 27.4336 5.44772 27.8813 6 27.8813H26C26.5523 27.8813 27 27.4336 27 26.8813V6.88135C27 6.32906 26.5523 5.88135 26 5.88135Z"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 16.8813H21"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 11.8813V21.8813"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "engrane":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 22.8813C19.3137 22.8813 22 20.1951 22 16.8813C22 13.5676 19.3137 10.8813 16 10.8813C12.6863 10.8813 10 13.5676 10 16.8813C10 20.1951 12.6863 22.8813 16 22.8813Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.9617 9.01904C23.2784 9.31071 23.5784 9.61071 23.8617 9.91904L27.2742 10.4065C27.8302 11.3722 28.2588 12.4058 28.5492 13.4815L26.4742 16.244C26.4742 16.244 26.5117 17.094 26.4742 17.519L28.5492 20.2815C28.2602 21.3578 27.8315 22.3915 27.2742 23.3565L23.8617 23.844C23.8617 23.844 23.2742 24.4565 22.9617 24.744L22.4742 28.1565C21.5086 28.7126 20.475 29.1411 19.3992 29.4315L16.6367 27.3565C16.2125 27.3941 15.7859 27.3941 15.3617 27.3565L12.5992 29.4315C11.523 29.1425 10.4892 28.7138 9.52422 28.1565L9.03672 24.744C8.72839 24.4524 8.42839 24.1524 8.13672 23.844L4.72422 23.3565C4.1682 22.3909 3.73963 21.3573 3.44922 20.2815L5.52422 17.519C5.52422 17.519 5.48672 16.669 5.52422 16.244L3.44922 13.4815C3.73828 12.4053 4.16692 11.3715 4.72422 10.4065L8.13672 9.91904C8.42839 9.61071 8.72839 9.31071 9.03672 9.01904L9.52422 5.60654C10.4899 5.05052 11.5235 4.62195 12.5992 4.33154L15.3617 6.40654C15.7859 6.36903 16.2125 6.36903 16.6367 6.40654L19.3992 4.33154C20.4754 4.62061 21.5092 5.04925 22.4742 5.60654L22.9617 9.01904Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bolsa":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.9341 6.35645H4.93408C4.3818 6.35645 3.93408 6.80416 3.93408 7.35645V25.3564C3.93408 25.9087 4.3818 26.3564 4.93408 26.3564H26.9341C27.4864 26.3564 27.9341 25.9087 27.9341 25.3564V7.35645C27.9341 6.80416 27.4864 6.35645 26.9341 6.35645Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.9341 11.3564C20.9341 12.6825 20.4073 13.9543 19.4696 14.892C18.5319 15.8297 17.2602 16.3564 15.9341 16.3564C14.608 16.3564 13.3362 15.8297 12.3985 14.892C11.4609 13.9543 10.9341 12.6825 10.9341 11.3564"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mapa":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 23V5"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 9V27"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 23L4 25V7L12 5L20 9L28 7V25L20 27L12 23Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ojo":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0776 7C6.07764 7 2.07764 16 2.07764 16C2.07764 16 6.07764 25 16.0776 25C26.0776 25 30.0776 16 30.0776 16C30.0776 16 26.0776 7 16.0776 7Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0776 21C18.8391 21 21.0776 18.7614 21.0776 16C21.0776 13.2386 18.8391 11 16.0776 11C13.3162 11 11.0776 13.2386 11.0776 16C11.0776 18.7614 13.3162 21 16.0776 21Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "folder":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.1125 26H4.925C4.80353 26 4.68324 25.9761 4.57102 25.9296C4.45879 25.8831 4.35682 25.815 4.27093 25.7291C4.18503 25.6432 4.1169 25.5412 4.07041 25.429C4.02393 25.3168 4 25.1965 4 25.075V10H27C27.2652 10 27.5196 10.1054 27.7071 10.2929C27.8946 10.4804 28 10.7348 28 11V25.1125C28 25.3479 27.9065 25.5736 27.7401 25.7401C27.5736 25.9065 27.3479 26 27.1125 26Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 10V7.00001C4 6.73479 4.10536 6.48044 4.29289 6.2929C4.48043 6.10536 4.73478 6.00001 5 6.00001H11.5875C11.7174 5.99955 11.846 6.02471 11.9661 6.07404C12.0862 6.12338 12.1955 6.19591 12.2875 6.28751L16 10"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "folder-con-usuario":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 24.5C25.1569 24.5 26.5 23.1569 26.5 21.5C26.5 19.8431 25.1569 18.5 23.5 18.5C21.8431 18.5 20.5 19.8431 20.5 21.5C20.5 23.1569 21.8431 24.5 23.5 24.5Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.625 27.5C19.8453 26.6396 20.3457 25.877 21.0473 25.3324C21.7489 24.7878 22.6118 24.4922 23.5 24.4922C24.3882 24.4922 25.2511 24.7878 25.9527 25.3324C26.6543 25.877 27.1547 26.6396 27.375 27.5"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 10V7.00001C4 6.73479 4.10536 6.48044 4.29289 6.2929C4.48043 6.10536 4.73478 6.00001 5 6.00001H11.5875C11.7174 5.99955 11.846 6.02471 11.9661 6.07404C12.0862 6.12338 12.1955 6.19591 12.2875 6.28751L16 10"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.075 26H4.925C4.80353 26 4.68324 25.9761 4.57102 25.9296C4.45879 25.8831 4.35682 25.815 4.27093 25.7291C4.18503 25.6432 4.1169 25.5412 4.07041 25.429C4.02393 25.3168 4 25.1965 4 25.075V10H27C27.2652 10 27.5196 10.1054 27.7071 10.2929C27.8946 10.4804 28 10.7348 28 11V15"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "etiqueta":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.3 24.55L30 16L24.3 7.45004C24.2095 7.31062 24.0854 7.19628 23.939 7.11762C23.7926 7.03896 23.6287 6.99852 23.4625 7.00004H5C4.73478 7.00004 4.48043 7.1054 4.29289 7.29294C4.10536 7.48047 4 7.73483 4 8.00004V24C4 24.2653 4.10536 24.5196 4.29289 24.7071C4.48043 24.8947 4.73478 25 5 25H23.4625C23.6287 25.0016 23.7926 24.9611 23.939 24.8825C24.0854 24.8038 24.2095 24.6895 24.3 24.55V24.55Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "guardar":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 11.4125V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6.00001C5 5.73479 5.10536 5.48044 5.29289 5.2929C5.48043 5.10536 5.73478 5.00001 6 5.00001H20.5875C20.7174 4.99955 20.846 5.02471 20.9661 5.07404C21.0862 5.12338 21.1955 5.19591 21.2875 5.28751L26.7125 10.7125C26.8041 10.8046 26.8766 10.9138 26.926 11.0339C26.9753 11.154 27.0005 11.2827 27 11.4125V11.4125Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 27V19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H21C21.2652 18 21.5196 18.1054 21.7071 18.2929C21.8946 18.4804 22 18.7348 22 19V27"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 9H12"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "circulo-pregunta":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 24C16.8284 24 17.5 23.3284 17.5 22.5C17.5 21.6716 16.8284 21 16 21C15.1716 21 14.5 21.6716 14.5 22.5C14.5 23.3284 15.1716 24 16 24Z"
            fill="#283545"
          />
          <path
            d="M16 18V17C16.6922 17 17.3689 16.7947 17.9445 16.4101C18.5201 16.0256 18.9687 15.4789 19.2336 14.8394C19.4985 14.1999 19.5678 13.4961 19.4327 12.8172C19.2977 12.1383 18.9644 11.5146 18.4749 11.0251C17.9854 10.5356 17.3617 10.2023 16.6828 10.0673C16.0039 9.9322 15.3001 10.0015 14.6606 10.2664C14.0211 10.5313 13.4744 10.9799 13.0899 11.5555C12.7053 12.1311 12.5 12.8078 12.5 13.5"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "reloj":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            className={`stroke-current`}
            strokeWidth="2"
            stroke-miterlimit="10"
          />
          <path
            d="M16 9V16H23"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "comillas":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H12.5C12.7652 8 13.0196 8.10536 13.2071 8.29289C13.3946 8.48043 13.5 8.73478 13.5 9V20C13.5 21.3261 12.9732 22.5979 12.0355 23.5355C11.0979 24.4732 9.82608 25 8.5 25"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 18H19.5C19.2348 18 18.9804 17.8946 18.7929 17.7071C18.6054 17.5196 18.5 17.2652 18.5 17V9C18.5 8.73478 18.6054 8.48043 18.7929 8.29289C18.9804 8.10536 19.2348 8 19.5 8H27C27.2652 8 27.5196 8.10536 27.7071 8.29289C27.8946 8.48043 28 8.73478 28 9V20C28 21.3261 27.4732 22.5979 26.5355 23.5355C25.5979 24.4732 24.3261 25 23 25"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "llamada":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5625 15.6C12.5915 17.7251 14.3098 19.439 16.4375 20.4625C16.5944 20.5369 16.768 20.569 16.9412 20.5559C17.1143 20.5427 17.2811 20.4847 17.425 20.3875L20.55 18.3C20.6881 18.2064 20.8476 18.1493 21.0137 18.134C21.1799 18.1187 21.3472 18.1457 21.5 18.2125L27.35 20.725C27.5499 20.8083 27.717 20.9549 27.8254 21.1424C27.9338 21.3298 27.9776 21.5477 27.95 21.7625C27.7646 23.2097 27.0582 24.5397 25.9631 25.5038C24.8679 26.4678 23.459 26.9997 22 27C17.4913 27 13.1673 25.209 9.97919 22.0209C6.79107 18.8327 5 14.5087 5 10C5.00033 8.54104 5.53227 7.13214 6.49628 6.03699C7.4603 4.94183 8.79033 4.23546 10.2375 4.05004C10.4523 4.02245 10.6702 4.06623 10.8577 4.17465C11.0452 4.28307 11.1918 4.4501 11.275 4.65004L13.7875 10.5125C13.8528 10.663 13.8802 10.8272 13.8671 10.9907C13.854 11.1541 13.8009 11.3119 13.7125 11.45L11.625 14.625C11.5321 14.7686 11.4775 14.9337 11.4666 15.1044C11.4556 15.2751 11.4887 15.4457 11.5625 15.6V15.6Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 6H26V11"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12L26 6"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "webcam":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_204_11693)">
            <path
              d="M16 22.8813C20.9706 22.8813 25 18.8519 25 13.8813C25 8.91078 20.9706 4.88135 16 4.88135C11.0294 4.88135 7 8.91078 7 13.8813C7 18.8519 11.0294 22.8813 16 22.8813Z"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17.8813C18.2091 17.8813 20 16.0905 20 13.8813C20 11.6722 18.2091 9.88135 16 9.88135C13.7909 9.88135 12 11.6722 12 13.8813C12 16.0905 13.7909 17.8813 16 17.8813Z"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 22.8813V26.8813"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 26.8813H28"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "maletin":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_204_11701)">
            <path
              d="M28 9.88135H4C3.44772 9.88135 3 10.3291 3 10.8813V24.8813C3 25.4336 3.44772 25.8813 4 25.8813H28C28.5523 25.8813 29 25.4336 29 24.8813V10.8813C29 10.3291 28.5523 9.88135 28 9.88135Z"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 15.8813H29"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13.8813V17.8813"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 13.8813V17.8813"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 9.88135V7.88135C21 7.35091 20.7893 6.84221 20.4142 6.46713C20.0391 6.09206 19.5304 5.88135 19 5.88135H13C12.4696 5.88135 11.9609 6.09206 11.5858 6.46713C11.2107 6.84221 11 7.35091 11 7.88135V9.88135"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "estudiante":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_204_11710)">
            <path
              d="M4 8.88135V18.8813"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 27.8813C8.9625 24.8713 12.1388 22.8813 16 22.8813C19.8612 22.8813 23.0375 24.8713 25 27.8813"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 8.88135L16 12.8813L4 8.88135L16 4.88135L28 8.88135Z"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.1675 11.1587C22.0833 12.1609 22.6879 13.4078 22.9077 14.7476C23.1274 16.0873 22.9529 17.462 22.4052 18.7043C21.8576 19.9466 20.9605 21.0028 19.8232 21.7443C18.686 22.4859 17.3576 22.8807 16 22.8807C14.6424 22.8807 13.314 22.4859 12.1768 21.7443C11.0395 21.0028 10.1424 19.9466 9.59478 18.7043C9.04713 17.462 8.87256 16.0873 9.09232 14.7476C9.31208 13.4078 9.91669 12.1609 10.8325 11.1587"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "documento":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_204_11731)">
            <path
              d="M25 28.8813H7C6.73478 28.8813 6.48043 28.776 6.29289 28.5885C6.10536 28.4009 6 28.1466 6 27.8813V5.88135C6 5.61613 6.10536 5.36178 6.29289 5.17424C6.48043 4.9867 6.73478 4.88135 7 4.88135H19L26 11.8813V27.8813C26 28.1466 25.8946 28.4009 25.7071 28.5885C25.5196 28.776 25.2652 28.8813 25 28.8813Z"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 4.88135V11.8813H26"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17.8813H20"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21.8813H20"
              className={`stroke-current`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "salida":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.75 10.75L27 16L21.75 21.25"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 16H27"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H13"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "niveles":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.80542 25.087H8.80542V19.087H15.8054V13.087H22.8054V7.08704H29.8054"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "certificado":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 22C27.3137 22 30 19.3137 30 16C30 12.6863 27.3137 10 24 10C20.6863 10 18 12.6863 18 16C18 19.3137 20.6863 22 24 22Z"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 20.4762V28L24 26L20 28V20.475"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 24H5C4.73478 24 4.48043 23.8946 4.29289 23.7071C4.10536 23.5196 4 23.2652 4 23V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 17H14"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 13H14"
            className={`stroke-current`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "estrella":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.972 9.43416L21.972 9.43416L21.9743 9.44126C22.0099 9.55049 22.012 9.66788 21.9803 9.77829C21.9486 9.88849 21.8847 9.9867 21.7969 10.0603C21.7967 10.0605 21.7965 10.0606 21.7963 10.0608L17.5605 13.5843L17.0795 13.9845L17.229 14.5921L18.5696 20.039L18.5723 20.0498L18.5752 20.0606C18.597 20.1414 18.6 20.226 18.584 20.3081C18.5679 20.3901 18.5333 20.4674 18.4827 20.534C18.4322 20.6005 18.367 20.6546 18.2922 20.6921C18.2194 20.7286 18.1393 20.7484 18.0578 20.7499C17.9622 20.7484 17.8689 20.7199 17.7887 20.6678L17.7887 20.6677L17.7778 20.6608L13.0435 17.6702L12.7988 17.5156H12.5094H12.4907H12.2007L11.9556 17.6708L7.5602 20.4543C7.56001 20.4544 7.55982 20.4545 7.55964 20.4546C7.44404 20.5274 7.30939 20.5641 7.17285 20.56C7.03739 20.556 6.90618 20.512 6.79569 20.4336C6.67823 20.3469 6.58924 20.2272 6.54013 20.0897C6.49057 19.9509 6.4839 19.8005 6.52099 19.6579L6.52233 19.6526L7.78795 14.6745L7.94204 14.0685L7.46458 13.6646L3.20833 10.0646L3.20834 10.0646L3.20374 10.0608C3.11558 9.98709 3.05151 9.88871 3.01979 9.77829C2.98807 9.66788 2.99015 9.55049 3.02577 9.44126L3.02577 9.44127L3.02679 9.4381C3.06038 9.33393 3.12445 9.24223 3.21072 9.17487C3.29671 9.10772 3.40082 9.06784 3.50964 9.06033C3.50999 9.06031 3.51034 9.06028 3.51069 9.06026L9.03931 8.70418L9.66826 8.66367L9.90305 8.07879L12.0031 2.84754L12.0031 2.84755L12.0057 2.84085C12.0451 2.74069 12.1136 2.65466 12.2024 2.59389C12.2902 2.53384 12.3938 2.50119 12.5 2.50002C12.6063 2.50119 12.7099 2.53384 12.7976 2.59389C12.8865 2.65466 12.955 2.74069 12.9944 2.84085L12.9954 2.8435L15.0579 8.04663L15.2901 8.63236L15.9187 8.67575L21.4874 9.06013V9.06014L21.4935 9.06053C21.6016 9.06733 21.7052 9.10664 21.7906 9.17332C21.8759 9.23999 21.9392 9.33091 21.972 9.43416Z"
            className="stroke-current"
            strokeWidth="2"
          />
        </svg>
      );
    case "estrella-llena":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.925 9.13125C22.8312 8.83592 22.6502 8.57585 22.406 8.38513C22.1617 8.19441 21.8656 8.08195 21.5563 8.0625L15.9875 7.67813L13.925 2.475C13.8124 2.1885 13.6164 1.94241 13.3623 1.76858C13.1083 1.59475 12.8079 1.50118 12.5 1.5C12.1922 1.50118 11.8918 1.59475 11.6377 1.76858C11.3837 1.94241 11.1877 2.1885 11.075 2.475L8.97503 7.70625L3.44378 8.0625C3.13488 8.08321 2.8393 8.19614 2.59528 8.38668C2.35126 8.57722 2.17003 8.83659 2.07503 9.13125C1.97748 9.43043 1.97178 9.75197 2.05867 10.0544C2.14556 10.3569 2.32106 10.6263 2.56253 10.8281L6.81878 14.4281L5.55316 19.4062C5.46559 19.743 5.48135 20.0983 5.59839 20.426C5.71542 20.7537 5.92832 21.0386 6.20941 21.2438C6.48225 21.4396 6.80732 21.5495 7.14301 21.5596C7.4787 21.5696 7.80975 21.4792 8.09378 21.3L12.4907 18.5156H12.5094L17.2438 21.5062C17.4866 21.6641 17.7698 21.7487 18.0594 21.75C18.2959 21.7481 18.5288 21.6921 18.7402 21.5861C18.9517 21.4802 19.136 21.3272 19.279 21.1389C19.4221 20.9505 19.5201 20.7319 19.5654 20.4998C19.6108 20.2677 19.6023 20.0283 19.5407 19.8L18.2 14.3531L22.4375 10.8281C22.679 10.6263 22.8545 10.3569 22.9414 10.0544C23.0283 9.75197 23.0226 9.43043 22.925 9.13125Z"
            className="fill-current"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M16.9854 28.0658C23.6128 28.0658 28.9854 22.6932 28.9854 16.0658C28.9854 9.43838 23.6128 4.0658 16.9854 4.0658C10.3579 4.0658 4.98535 9.43838 4.98535 16.0658C4.98535 22.6932 10.3579 28.0658 16.9854 28.0658Z"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.9854 11.0658H19.9854C19.1897 11.0658 18.4266 11.3819 17.864 11.9445C17.3014 12.5071 16.9854 13.2701 16.9854 14.0658V28.0658"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9854 18.0658H20.9854"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
              className="stroke-current"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M22 4H10C6.68629 4 4 6.68629 4 10V22C4 25.3137 6.68629 28 10 28H22C25.3137 28 28 25.3137 28 22V10C28 6.68629 25.3137 4 22 4Z"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
              className="fill-current"
            />
          </g>
        </svg>
      );
    case "correo":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M28 7L16 18L4 7"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8188 16L4.30884 24.7175"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.6912 24.7175L18.1812 16"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "menu":
      return (
        <svg
          className={`w-6 h-6 ${extraClassName}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M4 8H28"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16H28"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 24H28"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
