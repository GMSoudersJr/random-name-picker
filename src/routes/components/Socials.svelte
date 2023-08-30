<script>
  import { socials } from '$lib/socials.js';
</script>

<section class="contact" id="contact">
{#each socials as social (social.id)}
  <a
    href={social.href}
    target="_blank"
    referrerpolicy="no-referrer"
    id={social.id}
    class={social.class}
    title={social.title}
  >
    {#if social.id === "email"}
      {social.emoji}
    {:else}
      <img
        id={`${social.id}-icon`}
        class="icon"
        src={social.iconUrl}
        alt={social.alt}
      />
    {/if}
  </a>
{/each}
</section>


<style>
  section {
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 33%
  }

  a {
    text-decoration: none;
  }

  .icon,
  .email {
    height: 25px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }

  .email {
    font-family: var(--fontFamilyEmoji);
  }


  @media screen and (max-width: 80em) {
  }
  @media screen and (max-width: 64em) {
  }
  @media screen and (max-width: 48em) {
  }
  @media screen and (max-width: 40em) {
  }
</style>

