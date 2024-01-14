import { ShortTextInput } from './ShortTextInput';
import { isMobile } from '@/utils/isMobileSignal';
import { createSignal, createEffect, onMount } from 'solid-js';
import { SendButton } from '@/components/SendButton';
import { Upload } from './Upload';
<<<<<<< HEAD
import { PeleAIConfig } from '@/features/bubble/types';
=======
import { ApricotBotConfig } from '@/features/bubble/types';
>>>>>>> af22e4e (get upload files config)

type Props = {
  placeholder?: string;
  backgroundColor?: string;
  textColor?: string;
  sendButtonColor?: string;
  defaultValue?: string;
  fontSize?: number;
  disabled?: boolean;
  onSubmit: (value: string) => void;
<<<<<<< HEAD
  onUpload: (isSuccess: boolean, message: string) => void;
  peleAIConfig?: PeleAIConfig;
  chatId?: string;
=======
  apricotBotConfig?: ApricotBotConfig
>>>>>>> af22e4e (get upload files config)
};

const defaultBackgroundColor = '#ffffff';
const defaultTextColor = '#303235';
const defaultButtonColor = '#3B81F6';

export const TextInput = (props: Props) => {
  const [inputValue, setInputValue] = createSignal(props.defaultValue ?? '');
  let inputRef: HTMLInputElement | HTMLTextAreaElement | undefined;

  const handleInput = (inputValue: string) => setInputValue(inputValue);

  const checkIfInputIsValid = () => inputValue() !== '' && inputRef?.reportValidity();

  const submit = () => {
    if (checkIfInputIsValid()) props.onSubmit(inputValue());
    setInputValue('');
  };

  const submitWhenEnter = (e: KeyboardEvent) => {
    // Check if IME composition is in progress
    const isIMEComposition = e.isComposing || e.keyCode === 229;
    if (e.key === 'Enter' && !isIMEComposition) submit();
  };

  createEffect(() => {
    if (!props.disabled && !isMobile() && inputRef) inputRef.focus();
  });

  onMount(() => {
    if (!isMobile() && inputRef) inputRef.focus();
  });

  return (
    <div
      class={'flex items-end justify-between chatbot-input'}
      data-testid="input"
      style={{
        'border-top': '1px solid #eeeeee',
        position: 'absolute',
        left: '20px',
        right: '20px',
        bottom: '40px',
        margin: 'auto',
        'z-index': 1000,
        'background-color': props.backgroundColor ?? defaultBackgroundColor,
        color: props.textColor ?? defaultTextColor,
      }}
      onKeyDown={submitWhenEnter}
    >
      <ShortTextInput
        ref={inputRef as HTMLInputElement}
        onInput={handleInput}
        value={inputValue()}
        fontSize={props.fontSize}
        disabled={props.disabled}
        placeholder={props.placeholder ?? 'Type your question'}
      />
      <SendButton
        sendButtonColor={props.sendButtonColor ?? defaultButtonColor}
        type="button"
        isDisabled={props.disabled || inputValue() === ''}
        class="my-2 ml-2"
        on:click={submit}
      >
        <span style={{ 'font-family': 'Poppins, sans-serif' }}>Send</span>
      </SendButton>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3ac3312 (commit dist)
      <Upload
        uploadColor={props.sendButtonColor ?? defaultButtonColor}
        chatId={props.chatId}
        customerId={props.peleAIConfig?.customerId}
        onUpload={props.onUpload}
      />
<<<<<<< HEAD
=======
      <Upload customerId={props.apricotBotConfig?.customerId}/>
>>>>>>> af22e4e (get upload files config)
=======
>>>>>>> 3ac3312 (commit dist)
    </div>
  );
};
