export default function ExerciseCard({
  title,
  description,
  image,  // 将imageUrl改为image
  tags,
  onClick
}) {
  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
      onClick={onClick}
    >
      {image && (
        <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-700"> {/* Fixed height for image container */}
          <img
            src={image}  // 同步修改为image
            alt={title || 'Exercise image'}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 text-blue-500">点击查看完整练习 →</div>
      </div>
    </div>
  );
}