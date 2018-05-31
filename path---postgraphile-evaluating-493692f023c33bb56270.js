webpackJsonp([46110498460401],{393:function(e,t){e.exports={data:{remark:{html:'<h2 id="evaluating-postgraphile-for-your-project"><a href="#evaluating-postgraphile-for-your-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Evaluating PostGraphile For Your Project</h2>\n<p>Hopefully you’ve been convinced that PostGraphile serves an awesome GraphQL API,\nbut now let’s take a more critical look at whether or not you should adopt\nPostGraphile for your project.</p>\n<p>PostGraphile’s audience is for people whose core business is not the API and\nwant to prioritize their product. PostGraphile allows you to define your content\nmodel in the database as you normally would, however instead of building the\nbindings to the database (your API) PostGraphile takes care of it.</p>\n<p>This takes a huge maintenance burden off your shoulders. Now you don’t have to\nworry about optimizing the API and the database, instead you can focus on just\noptimizing your database.</p>\n<h3 id="no-lock-in"><a href="#no-lock-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>No Lock In</h3>\n<p>PostGraphile does not lock you into using PostGraphile forever. Its purpose is to\nhelp your business in a transitory period. When you feel comfortable with the\ncost of building your API PostGraphile is simple to switch with a custom\nsolution.</p>\n<p>How is it simple? Well first of all, your PostgreSQL schema is still your\nPostgreSQL schema. PostGraphile does not ask you to do anything too divergent\nwith your schema allowing you to take your schema (and all your data) to\nwhatever solution you build next. GraphQL itself provides a simple and clear\ndeprecation path if you want to start using different fields. And of course\nwith Graphile Build plugins you can extend (or remove) functionality as you\nwish.</p>\n<p>Ideally PostGraphile scales with your company and we would appreciate your\ncontributions to help it scale, however there is a simple exit path even years\ninto the business.</p>\n<h3 id="schema-driven-apis"><a href="#schema-driven-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Schema Driven APIs</h3>\n<p>If you fundamentally disagree with a one-to-one mapping of a SQL schema to an\nAPI (GraphQL or otherwise) this section is for you. First of all, PostGraphile\nis not necessarily meant to be a permanent solution. PostGraphile was created to\nallow you to focus on your product and not the API. If you want a custom API\nthere is a simple transition path (read <a href="#no-lock-in">no lock in</a>). If you\nstill can’t get over the one-to-one nature of PostGraphile consider the\nfollowing arguments why putting your business logic in PostgreSQL is a good\nidea:</p>\n<ol>\n<li>PostgreSQL already has a powerful <a href="http://www.postgresql.org/docs/current/static/user-manag.html">user management system</a> with fine grained <a href="http://www.postgresql.org/docs/current/static/ddl-rowsecurity.html">row level security</a>. A custom API would mean you have to build your own user management and security.</li>\n<li>PostgreSQL allows you to hide implementation details with <a href="http://www.postgresql.org/docs/current/static/sql-createview.html">views</a> of your data. Simple views can even be <a href="http://www.postgresql.org/docs/current/static/sql-createview.html#SQL-CREATEVIEW-UPDATABLE-VIEWS">auto-updatable</a>. This provides you with the same freedom and flexibility as you might want from a custom API except more performant.</li>\n<li>PostgreSQL gives you automatic relations with the <code class="language-text">REFERENCES</code> constraint and PostGraphile automatically detects them. With a custom API, you’d need to hardcode these relationships.</li>\n<li>For what it’s worth, you can write in your favorite scripting language in PostgreSQL including <a href="https://blog.heroku.com/archives/2013/6/5/javascript_in_your_postgres">JavaScript</a> and <a href="https://github.com/knu/postgresql-plruby">Ruby</a>.</li>\n<li>And if you don’t want to write your code inside PostgreSQL, you could also use PostgreSQL’s <a href="http://www.postgresql.org/docs/current/static/sql-notify.html"><code class="language-text">NOTIFY</code></a> feature to fire events to a listening Ruby or <a href="https://www.npmjs.com/package/pg-pubsub">JavaScript</a> microservice can listen and respond to PostgreSQL events (this could include email transactions and event reporting); or add a plugin via Graphile Build to wrap or even replace a PostGraphile resolver.</li>\n</ol>\n<p>Still worried about a certain aspect of a schema driven API? Open an issue, we\'re confident we can convince you otherwise 😉</p>\n<p><em>This article was originally written by <a href="https://twitter.com/calebmer">Caleb Meredith</a>.</em></p>',frontmatter:{path:"/postgraphile/evaluating/",title:"Evaluating"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Plugins [SUPPORTER] [PRO]",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions [SUPPORTER]",sectionId:"overview"},{to:"/postgraphile/production/",title:"Running in Production [PRO]",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-evaluating-493692f023c33bb56270.js.map