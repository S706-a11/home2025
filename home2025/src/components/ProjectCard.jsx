export const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-foreground">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <span aria-hidden className="text-muted-foreground transition-colors group-hover:text-foreground">
              →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
