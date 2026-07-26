import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Svg,
    Path,
    Circle,
    Rect,
} from "@react-pdf/renderer";
import { profile, skillGroups, experience, education, interests } from "@/app/data/cv";

const ACCENT = "#7c3aed";
const TEXT_COLOR = "#555";

const styles = StyleSheet.create({
    page: { padding: 36, fontSize: 10, fontFamily: "Helvetica", color: "#1f1f1f", lineHeight: 1.4 },
    name: { fontSize: 22, fontWeight: 700, marginBottom: 18 },
    title: { fontSize: 12, color: ACCENT, fontWeight: 700, marginBottom: 12 },

    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 14,
        marginBottom: 14,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    contactItem: { flexDirection: "row", alignItems: "center", gap: 4 },
    iconWrap: {
        width: 9,
        height: 9,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -2,
    },
    contactText: { fontSize: 9, color: TEXT_COLOR },

    tagline: { fontSize: 9.5, marginBottom: 6, lineHeight: 1.5 },
    summary: { fontSize: 9, color: "#555", marginBottom: 4, lineHeight: 1.5 },

    sectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        marginTop: 16,
        marginBottom: 8,
        color: ACCENT,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingBottom: 4,
    },

    jobRow: { marginBottom: 10 },
    jobHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
    jobRole: { fontSize: 11, fontWeight: 700 },
    jobCompany: { fontSize: 10, color: ACCENT, fontWeight: 700 },
    jobMeta: { fontSize: 8.5, color: "#666" },
    jobDesc: { fontSize: 9, color: "#444", marginTop: 3, marginBottom: 2 },
    bullet: { fontSize: 9, marginLeft: 10, marginTop: 2, color: "#333" },

    skillGroup: { marginBottom: 8, paddingTop: 8 },
    skillDivider: { borderTopWidth: 1, borderTopColor: "#eee" },
    skillCategory: { fontSize: 9.5, fontWeight: 700, marginBottom: 3, color: "#111" },
    skillLine: { fontSize: 9, color: "#444" },

    eduRow: { marginBottom: 8 },
    eduDegree: { fontSize: 10.5, fontWeight: 700 },
    eduSchool: { fontSize: 9.5 },
    eduMeta: { fontSize: 8.5, color: "#666", marginTop: 1 },
});

function MailIcon() {
    return (
        <Svg width={9} height={9} viewBox="0 0 24 24">
            <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={TEXT_COLOR} strokeWidth={2.2} fill="none" />
            <Path d="m22 6-10 7L2 6" stroke={TEXT_COLOR} strokeWidth={2.2} fill="none" />
        </Svg>
    );
}
function PhoneIcon() {
    return (
        <Svg width={9} height={9} viewBox="0 0 24 24">
            <Path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.902.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                stroke={TEXT_COLOR}
                strokeWidth={2.2}
                fill="none"
            />
        </Svg>
    );
}
function LocationIcon() {
    return (
        <Svg width={9} height={9} viewBox="0 0 24 24">
            <Path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke={TEXT_COLOR} strokeWidth={2.2} fill="none" />
            <Circle cx={12} cy={10} r={3} stroke={TEXT_COLOR} strokeWidth={2.2} fill="none" />
        </Svg>
    );
}
function GithubIcon() {
    return (
        <Svg width={9} height={9} viewBox="0 0 24 24">
            <Path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                stroke={TEXT_COLOR}
                strokeWidth={1.8}
                fill="none"
            />
        </Svg>
    );
}
function LinkedinIcon() {
    return (
        <Svg width={9} height={9} viewBox="0 0 24 24">
            <Path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                stroke={TEXT_COLOR}
                strokeWidth={2}
                fill="none"
            />
            <Rect x={2} y={9} width={4} height={12} stroke={TEXT_COLOR} strokeWidth={2} fill="none" />
            <Circle cx={4} cy={4} r={2} stroke={TEXT_COLOR} strokeWidth={2} fill="none" />
        </Svg>
    );
}
function GlobeIcon() {
    return (
        <Svg width={9} height={9} viewBox="0 0 24 24">
            <Circle cx={12} cy={12} r={10} stroke={TEXT_COLOR} strokeWidth={2} fill="none" />
            <Path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke={TEXT_COLOR} strokeWidth={1.6} fill="none" />
        </Svg>
    );
}

export default function ResumeDocument() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.title}>{profile.title}</Text>

                <View style={styles.contactRow}>
                    <View style={styles.contactItem}>
                        <View style={styles.iconWrap}><LocationIcon /></View>
                        <Text style={styles.contactText}>{profile.location}</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <View style={styles.iconWrap}><MailIcon /></View>
                        <Text style={styles.contactText}>{profile.email}</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <View style={styles.iconWrap}><PhoneIcon /></View>
                        <Text style={styles.contactText}>{profile.phone}</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <View style={styles.iconWrap}><GlobeIcon /></View>
                        <Text style={styles.contactText}>https://hrantsardaryan.labstacks.work/</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <View style={styles.iconWrap}><GithubIcon /></View>
                        <Text style={styles.contactText}>{profile.github}</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <View style={styles.iconWrap}><LinkedinIcon /></View>
                        <Text style={styles.contactText}>{profile.linkedin}</Text>
                    </View>
                </View>

                <Text style={styles.tagline}>{profile.tagline}</Text>
                <Text style={styles.summary}>{profile.summary}</Text>

                <Text style={styles.sectionTitle}>Experience</Text>
                {experience.map((job) => (
                    <View key={job.company + job.period} style={styles.jobRow}>
                        <View style={styles.jobHeader}>
                            <Text style={styles.jobRole}>
                                {job.role} <Text style={styles.jobCompany}>· {job.company}</Text>
                            </Text>
                            <Text style={styles.jobMeta}>{job.period}</Text>
                        </View>
                        <Text style={styles.jobMeta}>{job.location}</Text>
                        <Text style={styles.jobDesc}>{job.description}</Text>
                        {job.achievements.map((a) => (
                            <Text key={a} style={styles.bullet}>• {a}</Text>
                        ))}
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Education</Text>
                {education.map((edu) => (
                    <View key={edu.degree} style={styles.eduRow}>
                        <Text style={styles.eduDegree}>{edu.degree}</Text>
                        <Text style={styles.eduSchool}>{edu.school}</Text>
                        {edu.field && <Text style={styles.eduSchool}>{edu.field}</Text>}
                        <Text style={styles.eduMeta}>{edu.period} · {edu.location}</Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Skills</Text>
                {skillGroups.map((group, i) => (
                    <View
                        key={group.category}
                        style={[styles.skillGroup, i > 0 ? styles.skillDivider : {}]}
                        wrap={false}
                    >
                        <Text style={styles.skillCategory}>{group.category}</Text>
                        <Text style={styles.skillLine}>
                            {group.skills.map((s) => s.name).join(", ")}
                        </Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Interests</Text>
                <Text style={styles.skillLine}>{interests.join(", ")}</Text>
            </Page>
        </Document>
    );
}