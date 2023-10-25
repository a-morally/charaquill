import { type Component } from "solid-js";

export const Card: Component = () => {
  return (
    <div class="bg-primary-800 h-full w-full p-2 shadow-md">
      <div class="text-primary-100 text-lg">Title</div>
      <div class="text-primary-300 line-clamp-6 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim
        convallis aenean et tortor at risus. Mus mauris vitae ultricies leo. Id
        neque aliquam vestibulum morbi. Montes nascetur ridiculus mus mauris
        vitae ultricies leo. Aenean pharetra magna ac placerat. Mauris vitae
        ultricies leo integer malesuada nunc vel risus. A scelerisque purus
        semper eget duis. Id interdum velit laoreet id donec ultrices tincidunt
        arcu non. Commodo elit at imperdiet dui accumsan sit amet nulla
        facilisi. Et leo duis ut diam quam. Lorem sed risus ultricies tristique.
        Sed enim ut sem viverra aliquet. Quis eleifend quam adipiscing vitae
        proin sagittis nisl rhoncus. Fringilla urna porttitor rhoncus dolor
        purus non enim praesent elementum.
      </div>
      <div class="text-primary-400 text-right text-sm">2023-09-12</div>
    </div>
  );
};
