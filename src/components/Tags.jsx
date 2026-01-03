import { tagColors } from "../utils/Colors";

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, i) => (
        <Tag key={i} tag={tag} />
      ))}
    </div>
  );
}

function Tag({ tag }) {
  return <span className={`${tagColors[tag.color]} tag`}>{tag.name}</span>;
}
