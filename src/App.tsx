import { Envelope, Lock } from 'phosphor-react';
import { Logo } from './assets/Logo';

import { Heading } from './components/typography/Heading';
import { Text } from './components/typography/Text';
import { TextField } from './components/form/TextField';

import './styles/global.css'
import { Checkbox } from './components/form/Checkbox';
import { Button } from './components/form/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">Ignite Lab</Heading>
        <Text className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
      </header>
      <form className="flex flex-col items-stretch gap-4 w-full max-w-md mt-10 px-12">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextField.Root>
            <TextField.Icon>
              <Envelope />
            </TextField.Icon>
            <TextField.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextField.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextField.Root>
            <TextField.Icon>
              <Lock />
            </TextField.Icon>
            <TextField.Input type="password" id="password" placeholder="*********" />
          </TextField.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 hover:text-gray-200 transition-colors underline">Não possui conta? Crie uma agora!</a>
        </Text>
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 hover:text-gray-200 transition-colors underline">Esqueceu sua senha?</a>
        </Text>
      </footer>
    </div>
  )
}
