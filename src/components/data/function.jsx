export const returnHtml = (name, price) => {
  return `<div style="width: 200px; height: auto; display: flex;">
    <div style="padding: 5px; font-size: 0.8em"><p style="font-weight: 700;">${name}</p><p style="font-weight: 400;">${price}원</p></div>
    </div>`;
};
