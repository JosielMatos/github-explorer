export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "undefined"}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>Access Repository</a>
    </li>
  );
}
