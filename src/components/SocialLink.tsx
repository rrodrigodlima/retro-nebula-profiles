import { SOCIAL_DATA } from "../data/social"; // Ajuste o caminho conforme sua estrutura

export const SocialLinks = () => {
  return (
    <div className="w-full flex items-center justify-between gap-1 py-2 border-y-2 border-dashed border-panel-edge/30">
      {SOCIAL_DATA.map((social) => (
        <a
          key={social.id}
          href={social.url}
          className="relative w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-hot-pink hover:border-hot-pink transition-all duration-500 group overflow-hidden"
        >
          {/* Imagem Padrão: Visível por padrão, encolhe e some no hover */}
          <img
            src={social.icon}
            alt={social.name}
            className="absolute w-5 h-5 object-contain transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-50"
          />

          {/* Imagem Hover: Invisível e pequena, cresce e aparece no hover */}
          <img
            src={social.hover}
            alt={`${social.name} Hover`}
            className="absolute w-5 h-5 object-contain transition-all duration-300 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
          />
        </a>
      ))}
    </div>
  );
};