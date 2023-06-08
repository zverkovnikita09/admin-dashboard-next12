import style from './SearchInput.module.scss'
import { useRef, useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import PurpleButton from '../../UI/PurpleButton';

interface IsearchItem {
  id: number,
  innerText: string
}

interface SearchInputProps {
  itemsList: Array<IsearchItem>,
  onSelect: (id: number) => void,
  items: IsearchItem[]
}

const SearchInput: React.FC<SearchInputProps> = ({ itemsList = [], onSelect, items }) => {
  const filteredItems = itemsList.filter(el => !items.some(item => el.id === item.id))
  const [inputValue, setInputValue] = useState<string>('');
  const [itemId, setItemId] = useState<number>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [availableItems, setAvalableItems] = useState<IsearchItem[]>(filteredItems);
  const [error, setError] = useState<boolean>(false);

  const chooseItem = (item: IsearchItem) => {
    setInputValue(item.innerText);
    setItemId(item.id);
    setError(false)
  }

  const clearInput = () => {
    setInputValue('');
    inputRef.current?.focus()
  }

  const onSubmit = () => {
    if (!itemId && itemId !== 0) {
      setError(true)
      return
    }
    setInputValue('');
    setItemId(undefined);
    onSelect(itemId)
    setError(false)
  }

  useEffect(() => {
    const newAvailableItems = filteredItems.filter(item => item.innerText.toLowerCase()
      .includes(inputValue.toLowerCase()));
    setAvalableItems(newAvailableItems)
  }, [inputValue])

  return <div className={style.wrapper}>
    <input
      className={`${style.searchInput} ${inputValue ? style.filled : ''}`}
      placeholder="Искать..."
      value={inputValue}
      ref={inputRef}
      onChange={e => setInputValue(e.target.value)}
    />
    <div className={style.searchIcon}><BsSearch color="#c0c4cc" size={13} strokeWidth={2} /></div>
    <button className={style.deleteIcon} onClick={clearInput}>
      <TiDelete color="#606266" size={20} />
    </button>
    <ul className={style.dropdownList}>
      {availableItems.length ?
        availableItems.map(item => <li key={item.id} className={style.dropdownListItem}
          onClick={() => chooseItem(item)}>
          {item.innerText}
        </li>)
        : <p className={style.notFound}>Не найдено</p>}
    </ul>
    <PurpleButton type='button' onClick={onSubmit}>Добавить</PurpleButton>
    {error && <p className={style.error}>Данного пользователя нет в списке</p>}
  </div>
}

export default SearchInput;