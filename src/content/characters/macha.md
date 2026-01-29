---
name: "Macha"
race: "Elf"
class: "Paladin"
ac: 18
hp: 25
xpPips: 2
proficiencies: ["Athletics", "Intimidation", "Perception", "Sleight of Hand", "Stealth"]
abilities:
  - name: "Divine Sense"
    group: "Combat Actions"
    tags: ["Action", "Utility", "Detection"]
    summary: "Sense celestials, fiends, undead, and desecrated areas within 60 ft."
    details: |
      As an action, open your awareness for 1 turn.
      You know the location of any celestial, fiend, or undead within 60 ft not behind total cover.
      You also sense consecrated or desecrated places or objects.
    uses: "1 + CHA mod / long rest"
    recharge: "Long Rest"
    order: 1
  - name: "Channel Divinity: Vow of Enmity"
    group: "Bonus Actions & Reactions"
    tags: ["Bonus Action", "Combat", "Channel Divinity"]
    summary: "Choose a creature within 10 ft to gain advantage on attacks for 1 minute."
    details: |
      Bonus action; choose a creature you can see within 10 ft.
      You gain advantage on attack rolls against it for 1 minute or until it drops to 0 HP or falls unconscious.
      Uses Channel Divinity.
    uses: "Channel Divinity"
    recharge: "Short or Long Rest"
    order: 1
  - name: "Harness Divine Power"
    group: "Bonus Actions & Reactions"
    tags: ["Bonus Action", "Resource", "Channel Divinity"]
    summary: "Convert Channel Divinity into a spell slot."
    details: |
      Bonus action; expend a Channel Divinity use to regain one expended spell slot.
      Slot level is no higher than half your proficiency bonus (rounded up).
    uses: "Channel Divinity"
    recharge: "Short or Long Rest"
    order: 2
  - name: "Lay on Hands"
    group: "Resources & Limited Uses"
    tags: ["Action", "Healing", "Resource"]
    summary: "Pool of healing you can spend to restore HP or cure disease/poison."
    details: |
      You have a healing pool equal to 5 x your paladin level.
      As an action, touch a creature to restore HP from the pool.
      You can also spend 5 HP from the pool to cure one disease or neutralize one poison.
    uses: "Pool = 5 x paladin level"
    recharge: "Long Rest"
    order: 1
  - name: "Channel Divinity"
    group: "Resources & Limited Uses"
    tags: ["Resource", "Channel Divinity"]
    summary: "Fuel oath options like Vow of Enmity; regain on a short or long rest."
    details: |
      When you use Channel Divinity, choose one available option.
      Some effects require saving throws; DC equals your paladin spell save DC.
    uses: "1 / short rest"
    recharge: "Short or Long Rest"
    order: 2
  - name: "Tenets of Vengeance"
    group: "Resources & Limited Uses"
    tags: ["Roleplay", "Oath"]
    summary: "Guiding principles that shape how you pursue justice."
    details: |
      Fight the Greater Evil.
      No Mercy for the Wicked.
      By Any Means Necessary.
      Restitution.
    order: 3
  - name: "Divine Smite"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Combat"]
    summary: "On a hit, spend a spell slot to deal extra radiant damage."
    details: |
      When you hit with a melee weapon attack, you can expend a spell slot.
      Extra damage is 2d8 for a 1st-level slot + 1d8 per slot level above 1st (max 5d8).
      Add +1d8 if the target is undead or a fiend.
    order: 1
  - name: "Divine Health"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Defense"]
    summary: "You are immune to disease."
    details: "You have immunity to disease."
    order: 2
  - name: "Dueling"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Combat"]
    summary: "While using a one-handed melee weapon and no other weapons, gain +2 damage."
    details: |
      When you are wielding a melee weapon in one hand and no other weapons,
      you gain a +2 bonus to damage rolls with that weapon.
    order: 3
  - name: "Darkvision"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Utility"]
    summary: "See in dim light within 60 ft as bright, and darkness as dim."
    details: |
      You can see in dim light within 60 ft as if it were bright light.
      You can see in darkness within 60 ft as if it were dim light (no color vision).
    order: 4
  - name: "Fey Ancestry"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Defense"]
    summary: "Advantage on saves vs charm; magic can't put you to sleep."
    details: |
      You have advantage on saving throws against being charmed.
      Magic cannot put you to sleep.
    order: 5
  - name: "Mask of the Wild"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Utility"]
    summary: "You can attempt to hide when lightly obscured by natural phenomena."
    details: |
      You can attempt to hide even when only lightly obscured by foliage, heavy rain,
      falling snow, mist, and other natural phenomena.
    order: 6
  - name: "Trance"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Utility"]
    summary: "Meditate for 4 hours to gain the benefit of 8 hours of sleep."
    details: |
      Elves don't need to sleep; you meditate for 4 hours in a semiconscious state.
      You gain the same benefit as a human does from 8 hours of sleep.
    order: 7
  - name: "City Secrets"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Utility"]
    summary: "Travel in cities at double speed when not in combat."
    details: |
      You know the secret patterns and flow of cities.
      When not in combat, you and companions can travel between any two locations in the city at twice your normal speed.
    order: 8
spells:
  ability: "CHA"
  saveDC: 12
  attackBonus: 4
  sections:
    - level: 1
      label: "1st Level"
      items:
        - name: "Bless"
          tags: ["Action", "Buff", "Concentration"]
          summary: "Bless up to three creatures; they add 1d4 to attacks and saves."
          details: |
            You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.

            At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.
          order: 1
        - name: "Hunter's Mark"
          tags: ["Bonus Action", "Combat", "Concentration"]
          summary: "Mark a target; deal +1d6 damage and track it more easily."
          details: |
            You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.

            At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.
          order: 2
        - name: "Shield of Faith"
          tags: ["Bonus Action", "Buff", "Concentration"]
          summary: "Grant a creature +2 AC while you concentrate."
          details: "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
          order: 3
        - name: "Thunderous Smite"
          tags: ["Bonus Action", "Combat", "Concentration"]
          summary: "Next melee hit deals +2d6 thunder and can push/prone."
          details: "The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
          order: 4
        - name: "Compelled Duel"
          tags: ["Bonus Action", "Control", "Concentration"]
          summary: "Force a creature into a duel; it struggles to attack others or move away."
          details: |
            You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn.

            The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.
          order: 5
        - name: "Cure Wounds"
          tags: ["Action", "Healing"]
          summary: "Touch a creature to restore 1d8 + CHA HP."
          details: |
            A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

            At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.
          order: 6
        - name: "Bane"
          tags: ["Action", "Control", "Concentration"]
          summary: "Debuff up to three foes; subtract 1d4 from attacks and saves."
          details: |
            Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.

            At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.
          order: 7
tags: ["oathbound", "radiant", "tactician"]
portrait: "/images/characters/macha.png"
sheetUrl: "https://drive.google.com/file/d/1TR-F5vYHqBMNM1pnbQFbvE93h7A95NsV/view?usp=sharing"
blurb: "A radiant oathkeeper who never lets a debt go unpaid."
---

## Overview
- **Name:** Macha
- **Race:** Elf
- **Class:** Paladin

## What you're known for
- A calm voice that cuts through chaos
- Shield-first defense of the vulnerable
- Divine sparks that flare at the perfect moment

## Party role
Combat / Social

## Recent spotlight moment
*Placeholder — drop in a quick memory later.*
