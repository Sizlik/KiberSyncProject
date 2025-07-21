import React from 'react';
import { Cloud, Download, Share, Users, BookOpen, Sparkles, Shield, Zap } from 'lucide-react';

const KiberSyncProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Sparkles className="w-16 h-16 text-cyan-300" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Kiber<span className="text-cyan-300">Sync</span>Project
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Революционная платформа для сохранения, синхронизации и обмена учебными проектами в онлайн-образовании
            </p>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Умное облачное хранилище для образовательных проектов
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              KiberSyncProject решает ключевую проблему онлайн-образования — потерю студенческих проектов. 
              Наша система автоматически сохраняет все работы учащихся в облаке, организует их по модулям обучения 
              и предоставляет мгновенный доступ к любому проекту одним кликом.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Cloud className="w-6 h-6 text-cyan-300" />
                </div>
                <span className="text-gray-200">Автоматическое облачное сохранение</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <BookOpen className="w-6 h-6 text-purple-300" />
                </div>
                <span className="text-gray-200">Организация по модулям обучения</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-pink-500/20">
                  <Download className="w-6 h-6 text-pink-300" />
                </div>
                <span className="text-gray-200">Мгновенная загрузка проектов</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-cyan-500/20">
                  <Cloud className="w-8 h-8 text-cyan-300 mb-4" />
                  <h3 className="text-white font-semibold mb-2">Облачное хранение</h3>
                  <p className="text-gray-300 text-sm">Все проекты автоматически сохраняются в облаке</p>
                </div>
                <div className="p-6 rounded-2xl bg-purple-500/20">
                  <Zap className="w-8 h-8 text-purple-300 mb-4" />
                  <h3 className="text-white font-semibold mb-2">Быстрый доступ</h3>
                  <p className="text-gray-300 text-sm">Загрузка любого проекта одной кнопкой</p>
                </div>
                <div className="p-6 rounded-2xl bg-pink-500/20">
                  <BookOpen className="w-8 h-8 text-pink-300 mb-4" />
                  <h3 className="text-white font-semibold mb-2">Модульная организация</h3>
                  <p className="text-gray-300 text-sm">Проекты сортируются по курсам и модулям</p>
                </div>
                <div className="p-6 rounded-2xl bg-green-500/20">
                  <Shield className="w-8 h-8 text-green-300 mb-4" />
                  <h3 className="text-white font-semibold mb-2">Безопасность</h3>
                  <p className="text-gray-300 text-sm">Надежная защита всех данных</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Сообщество KiberSync</h3>
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="p-4 rounded-full bg-cyan-500/20 mx-auto mb-2">
                      <Share className="w-8 h-8 text-cyan-300" />
                    </div>
                    <p className="text-gray-300 text-sm">Делитесь проектами</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 rounded-full bg-purple-500/20 mx-auto mb-2">
                      <Users className="w-8 h-8 text-purple-300" />
                    </div>
                    <p className="text-gray-300 text-sm">Оценивайте работы</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border-l-4 border-cyan-400">
                  <h4 className="text-white font-semibold mb-2">Проект "Космическая станция"</h4>
                  <p className="text-gray-300 text-sm">Модуль: 3D-моделирование • ⭐ 4.8 • 23 комментария</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border-l-4 border-purple-400">
                  <h4 className="text-white font-semibold mb-2">Игра "Киберпанк 2077 Mini"</h4>
                  <p className="text-gray-300 text-sm">Модуль: Разработка игр • ⭐ 4.9 • 31 комментарий</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border-l-4 border-pink-400">
                  <h4 className="text-white font-semibold mb-2">Веб-сайт "EcoFuture"</h4>
                  <p className="text-gray-300 text-sm">Модуль: Веб-разработка • ⭐ 4.7 • 18 комментариев</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-white mb-8">
              Социальная платформа для творчества
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              KiberSyncProject — это не просто система хранения, но и активное сообщество учащихся. 
              Студенты могут делиться своими проектами, получать обратную связь от сверстников, 
              вдохновляться работами других и развиваться вместе.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Share className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Обмен проектами</h3>
                  <p className="text-gray-300">Публикуйте свои работы и изучайте проекты других студентов для вдохновения</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Взаимная оценка</h3>
                  <p className="text-gray-300">Оценивайте работы одноклассников и получайте конструктивную обратную связь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Сценарии использования
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            KiberSyncProject адаптируется под различные образовательные потребности
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <div className="p-4 rounded-2xl bg-cyan-500/30 w-fit mb-6">
              <BookOpen className="w-8 h-8 text-cyan-200" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Во время урока</h3>
            <p className="text-gray-300 mb-6">
              Студенты работают над проектами, зная, что их работа автоматически сохраняется. 
              По окончании урока локальные копии удаляются, но проект остается в облаке.
              На следующий день учащиеся могут продолжить работу над проектом, загрузив его одной кнопкой на другом компьютере.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-gray-300 text-sm">Автосохранение каждые 30 секунд</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-gray-300 text-sm">Версионный контроль изменений</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <div className="p-4 rounded-2xl bg-purple-500/30 w-fit mb-6">
              <Download className="w-8 h-8 text-purple-200" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Дома</h3>
            <p className="text-gray-300 mb-6">
              Учащиеся могут продолжить работу над проектами дома, загрузив их одной кнопкой 
              и синхронизировав изменения обратно в облако.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-300 text-sm">Мгновенная загрузка</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-300 text-sm">Синхронизация изменений</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30">
            <div className="p-4 rounded-2xl bg-pink-500/30 w-fit mb-6">
              <Share className="w-8 h-8 text-pink-200" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">В сообществе</h3>
            <p className="text-gray-300 mb-6">
              Готовые проекты публикуются в общем каталоге, где другие студенты могут 
              их оценить, прокомментировать и использовать как источник вдохновения.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-gray-300 text-sm">Система рейтингов</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-gray-300 text-sm">Комментарии и обратная связь</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Преимущества системы
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-content">
              <Cloud className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2">Надежность</h3>
            <p className="text-gray-300 text-sm">Проекты никогда не потеряются благодаря облачному хранению</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-content">
              <Zap className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2">Скорость</h3>
            <p className="text-gray-300 text-sm">Мгновенный доступ к любому проекту одним кликом</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-content">
              <Users className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2">Сообщество</h3>
            <p className="text-gray-300 text-sm">Активное взаимодействие между студентами</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-content">
              <BookOpen className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2">Организация</h3>
            <p className="text-gray-300 text-sm">Четкая структура по модулям и курсам обучения</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-16 mx-auto max-w-7xl border-t border-white/20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-cyan-300" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            KiberSyncProject
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Инновационное решение для современного онлайн-образования. 
            Сохраняйте, синхронизируйте и делитесь своими проектами с легкостью.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KiberSyncProject;