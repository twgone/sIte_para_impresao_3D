import { useState, type ReactNode } from "react";

function IconDots() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3v3M12 18v3M4.2 12h3M16.8 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" strokeLinecap="round" />
    </svg>
  );
}

function ProgressRing({ value, label }: { value: number; label: string }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-[88px] w-[88px]">
        <svg className="-rotate-90" width="88" height="88" viewBox="0 0 88 88" aria-hidden>
          <circle cx="44" cy="44" r={r} fill="none" stroke="#E8E8E8" strokeWidth="8" />
          <circle
            cx="44"
            cy="44"
            r={r}
            fill="none"
            stroke="#8A70FF"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-normal ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-caption font-semibold text-ink">{value}%</span>
        </div>
      </div>
      <span className="text-caption text-muted">{label}</span>
    </div>
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-3 rounded-full py-1 text-left transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <span className="text-body text-ink">{label}</span>
      <span
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full px-0.5 transition-colors duration-fast ${
          checked ? "bg-violet" : "bg-line"
        }`}
      >
        <span
          className={`h-6 w-6 rounded-full bg-surface shadow-sm transition-transform duration-fast ease-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-surface px-2.5 py-1 text-caption text-ink">
      {children}
    </span>
  );
}

function ListRow({
  title,
  subtitle,
  meta,
  icon,
}: {
  title: string;
  subtitle: string;
  meta: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-line py-3 last:border-b-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-violet">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-subtitle text-ink">{title}</p>
        <p className="truncate text-caption text-muted">{subtitle}</p>
      </div>
      <span className="shrink-0 text-caption text-muted">{meta}</span>
    </div>
  );
}

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const calendarDays = Array.from({ length: 28 }, (_, i) => i + 1);

export default function App() {
  const [alertsOn, setAlertsOn] = useState(true);
  const [storiesInMetrics, setStoriesInMetrics] = useState(false);
  const selectedDay = 18;

  return (
    <div className="min-h-screen p-6 md:p-8">
      <header className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-display text-ink">Análise de conteúdo</h1>
          <p className="mt-1 text-body text-muted">Visão geral do desempenho dos seus canais esta semana.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-full border border-line bg-surface px-5 py-3 text-body font-medium text-ink shadow-card transition hover:bg-line/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            Ver relatório
          </button>
          <button
            type="button"
            className="rounded-full bg-accent px-5 py-3 text-body font-semibold text-ink shadow-card transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            Exportar dados
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* KPIs */}
        <section className="rounded-card bg-surface p-6 shadow-card md:col-span-2 xl:col-span-1">
          <div className="mb-4 flex items-start justify-between">
            <h2 className="text-title text-ink">Resumo rápido</h2>
            <button
              type="button"
              className="rounded-control border border-transparent p-1.5 text-ink hover:border-line focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
              aria-label="Mais opções"
            >
              <IconDots />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-caption text-muted">Alcance</p>
              <p className="mt-1 text-title text-ink">128k</p>
            </div>
            <div>
              <p className="text-caption text-muted">Engajamento</p>
              <p className="mt-1 text-title text-ink">4,2%</p>
            </div>
            <div>
              <p className="text-caption text-muted">Novos seguidores</p>
              <p className="mt-1 text-title text-ink">+860</p>
            </div>
          </div>
        </section>

        {/* Score ring */}
        <section className="rounded-card bg-surface p-6 shadow-card">
          <h2 className="mb-4 text-title text-ink">Índice de conteúdo</h2>
          <div className="flex items-center justify-center py-2">
            <ProgressRing value={78} label="Consistência + qualidade" />
          </div>
        </section>

        {/* Featured card — tabbed corner */}
        <section className="relative overflow-hidden rounded-card bg-surface p-6 pt-10 shadow-card md:col-span-2 xl:col-span-1 xl:row-span-2">
          <div
            className="absolute left-0 top-0 rounded-br-card bg-accent px-4 py-2 text-caption font-semibold text-ink shadow-sm"
            style={{ borderTopLeftRadius: "28px" }}
          >
            Destaque da semana
          </div>
          <div className="mt-2 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-title text-ink">Vídeo: rotina de gravação</h2>
              <p className="mt-1 text-body text-muted">Publicado há 2 dias · YouTube</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full border border-line bg-surface px-4 py-2 text-caption font-medium text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
            >
              Detalhes
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Edição</Tag>
            <Tag>Long-form</Tag>
            <Tag>Tutorial</Tag>
          </div>
          <p className="mt-4 text-body text-ink">
            Retenção média subiu 12% na segunda metade. Títulos com número performam melhor no feed.
          </p>
          <div className="mt-6 flex items-center">
            <div className="flex -space-x-2">
              {["A", "B", "C"].map((l, i) => (
                <div
                  key={l}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface bg-line text-caption font-semibold text-ink"
                  style={{ zIndex: i }}
                >
                  {l}
                </div>
              ))}
            </div>
            <span className="ml-3 text-caption text-muted">Equipe atribuída</span>
          </div>
        </section>

        {/* Activity */}
        <section className="rounded-card bg-surface p-6 shadow-card md:col-span-2 xl:col-span-1">
          <h2 className="mb-1 text-title text-ink">Atividade recente</h2>
          <p className="mb-2 text-caption text-muted">Últimas análises e alertas</p>
          <ListRow
            title="Pico de comentários"
            subtitle="Short sobre review de equipamento"
            meta="Hoje"
            icon={<IconSpark />}
          />
          <ListRow
            title="Sugestão de título"
            subtitle="Variante A com melhor CTR previsto"
            meta="Ontem"
            icon={<IconSpark />}
          />
          <ListRow
            title="Relatório semanal pronto"
            subtitle="PDF enviado ao e-mail cadastrado"
            meta="Seg"
            icon={<IconSpark />}
          />
        </section>

        {/* Toggles + calendar */}
        <section className="rounded-card bg-surface p-6 shadow-card xl:col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-title text-ink">Preferências</h2>
              <div className="space-y-2 divide-y divide-line">
                <div className="pb-2">
                  <Toggle checked={alertsOn} onChange={setAlertsOn} label="Alertas de desempenho" />
                </div>
                <div className="pt-2">
                  <Toggle checked={storiesInMetrics} onChange={setStoriesInMetrics} label="Incluir Stories nas métricas" />
                </div>
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-success px-5 py-3 text-body font-semibold text-surface shadow-card transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Salvar preferências
              </button>
            </div>
            <div>
              <h2 className="mb-4 text-title text-ink">Março 2026</h2>
              <div className="grid grid-cols-7 gap-2 text-center text-caption text-muted">
                {weekDays.map((d) => (
                  <div key={d} className="py-1 font-medium">
                    {d}
                  </div>
                ))}
                {calendarDays.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`rounded-day py-2 text-caption font-medium transition ${
                      d === selectedDay ? "bg-accent text-ink" : "text-ink hover:bg-line/80"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
