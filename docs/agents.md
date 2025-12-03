# OpenCode Agent Context

## What is OpenCode?

OpenCode is an advanced AI coding assistant CLI tool built by the SST team. It's designed to help developers build software through natural language interaction, with sophisticated understanding of codebases and development workflows.

## How OpenCode Works

OpenCode uses Claude (Anthropic's AI) as its underlying model and provides:

1. **Codebase Understanding**: Can read, analyze, and modify files across your entire project
2. **Task Management**: Built-in todo system to track multi-step operations
3. **Tool Integration**: Access to bash, git, file operations, web fetching, and more
4. **Specialized Agents**: Different agent types for specific tasks (general, explore)
5. **Context Awareness**: Maintains conversation history and project structure understanding

## Design Paradigms System

This project uses a **design paradigm framework** located in `docs/paradigms/` that provides structured prompts for AI agents to generate consistent, high-quality UI/UX designs.

### Available Paradigms

Each `.mdc` file in `docs/paradigms/` contains:
- **Prompt Architecture**: Intent declarations, constraints, reference contexts
- **Design Constants**: Brand compliance, technical requirements, accessibility standards
- **Decision Framework**: Binary decision trees, priority hierarchies
- **Comprehensive Rubric**: Functionality, accessibility, implementation efficiency metrics
- **Validation Protocol**: Testable assertions and iteration triggers

### Key Paradigms in This Project

1. **minimalist.mdc** - "Less is more" approach with maximum whitespace
2. **monochroism.mdc** - Single-color palettes with varying shades for depth
3. **glassmorphic.mdc** - Frosted glass effects with transparency
4. **neomorphic.mdc** - Soft UI with subtle shadows
5. **brutalistic.mdc** - Raw, functional, bold typography
6. And 30+ other design systems...

### Multi-Chain Paradigm Usage

Paradigms can be **combined** (see `docs/paradigms/examples/multi-chain-examples.md`):
- Example: "scandinavian + kinetic + glassomorphic"
- Each paradigm contributes different aspects (base structure, animation, visual treatment)
- Allows for sophisticated, layered design systems

## Using Paradigms with OpenCode

### Single Paradigm
```
Create a landing page using @docs/paradigms/minimalist.mdc
```

### Multiple Paradigms
```
Design the UI with @docs/paradigms/scandinavian.mdc base, 
add @docs/paradigms/kinetic.mdc animations,
and apply @docs/paradigms/glassomorphic.mdc visual effects
```

### With Color Constraint
```
Use @docs/paradigms/minimalist.mdc with @docs/paradigms/monochroism.mdc 
of deep greens
```

## File Structure for AI Context

```
docs/
  paradigms/          # Design system definitions
    *.mdc             # Individual paradigm files
    examples/         # Reference implementations
    README.MD         # Overview of all paradigms
  agents.md           # This file - context for AI agents
```

## Best Practices for Agents

1. **Always reference paradigms** using the `@` syntax when they're mentioned
2. **Combine paradigms thoughtfully** - base + modifier + visual treatment works well
3. **Follow the rubric** - Each paradigm has a 1-5 scoring system for validation
4. **Check examples** - Review `docs/paradigms/examples/` for proven combinations
5. **Maintain constraints** - Paradigms define strict rules (max colors, spacing scales, etc.)

## Expected Outputs

When using paradigms, agents should produce:
- Semantic, accessible HTML
- Inline CSS following the paradigm's constants
- Typography scales from the paradigm
- Color palettes matching the paradigm constraints
- Responsive designs that scale appropriately
- SEO-optimized metadata
- Structured data (JSON-LD) when applicable

## Context Window Management

**Important**: When chaining multiple paradigms (3+), context windows can become large. Best practices:
- Prioritize the base paradigm (structural foundation)
- Apply modifiers selectively (animation, color, visual effects)
- Reference paradigm files directly rather than copying full content
- Use examples to show expected output quality

## Integration with This Project

This project (`humansonly.fm`) demonstrates:
- **Base Paradigm**: Minimalist (structure, whitespace, typography)
- **Color System**: Monochroism with deep greens (HSL-based palette)
- **Result**: Clean, focused podcast website with optimal readability
- **SEO**: Comprehensive metadata, structured data, accessibility standards

## Resources

- OpenCode Docs: https://opencode.ai/docs
- SST GitHub: https://github.com/sst/opencode
- Paradigm Examples: `docs/paradigms/examples/`
